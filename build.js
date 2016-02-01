var browserify = require('browserify');
var fs = require('fs');
var shell = require('shelljs');

fs.stat('./public', function(error, stats) {
	if (error) {
		shell.mkdir('./public');
	} else if (stats.isDirectory()) {
		shell.rm('-rf', './public/*');
	} else {
		throw new Error('Attention: directory ./public was not initialized.');
	}

	fs.createReadStream('./app/index.html')
		.pipe(fs.createWriteStream('./public/index.html'));
	fs.createReadStream('./app/favicon.ico')
		.pipe(fs.createWriteStream('./public/favicon.ico'));


	browserify({
			debug: true
		})
		.transform('babelify', {
			"presets": ["es2015"]
		})
		.require('./app/app.js', {
			entry: true
		})
		.bundle()
		.on("error", function(err) {
			console.log("Error: " + err.message);
		})
		.pipe(fs.createWriteStream("./public/bundle.js"));
});

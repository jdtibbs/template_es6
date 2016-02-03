var exec = require('child_process').exec;
var fs = require('fs');

console.log('Do an initial build...');
exec('node ./scripts/build.js', function(error, stdout, stderr) {
	if (error) {
		console.log(error);
	}
	console.log('...initial build is complete.');
});

// watch for file changes and execute a build.
console.log('Start watching files for changes...');
var watch = fs.watch('./app', {
	persistent: true,
	recursive: true
});

var doBuild = false;

watch.on('change', function(event, filename) {
	if (!doBuild) {
		doBuild = true;
		setTimeout(function() {
			doBuild = false;
			console.log('One or more files changed, start a build...');
			exec('node ./scripts/build.js', function(error, stdout, stderr) {
				console.log('...build complete.');
			});
		}, 2000);
	}
});

watch.on('error', function(error) {
	console.log('Watch error:');
	console.log(error);
});

console.log('Start the server...');
exec('node ./scripts/server.js', function(error, stdout, stderr) {
	console.log('Error executing server.js:');
	console.log(error);
});

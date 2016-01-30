var test = require('tape');
var Table = require('./test');

var table = new Table(5, 5);
var table2 = new Table(2, 10);

test('constructor', function(t) {
	t.plan(2);

	t.equal(table.cellCount(), 25);
	t.equal(table2.cellCount(), 20);
});

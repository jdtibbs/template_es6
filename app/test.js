(function() {

	// common object creation methods:
	var obj = {};
	var obj2 = Object.create(Object.prototype);

	// the constructor pattern:
	// allows for initiation of object variables.
	function Table(rows, columns) {
		this.rows = rows;
		this.columns = columns;
	}

	// prototype allows for all objects of this type to share the same method implementation.
	(function() {
		this.cellCount = function() {
			return this.rows * this.columns;
		};
	}).call(Table.prototype);

	module.exports = Table;
})();

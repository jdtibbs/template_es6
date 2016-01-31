import doubleArray from './test';
import test from 'tape';

test('es6', (t) => {
	t.plan(1);
	t.deepEqual([2, 4, 6], doubleArray([1, 2, 3]));
});

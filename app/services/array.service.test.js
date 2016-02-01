import service from './array.service';
import test from 'tape';

test('es6', (t) => {
	t.plan(1);
	t.deepEqual([2, 4, 6], service([1, 2, 3]));
});

'use strict';

require('log-node-version')();

const assert = require('assert');

assert.strictEqual(Object.is('foo', 'foo'), true);
assert.strictEqual(Object.is('foo', 'bar'), false);

assert.strictEqual(Object.is([], []), false);
const test = { a: 1 };
assert.strictEqual(Object.is(test, test), true);
assert.strictEqual(Object.is(null, null), true);
assert.strictEqual(Object.is({ a: 1 }, { a: 1 }), false);

assert.strictEqual(Object.is(0, -0), false);
assert.strictEqual(Object.is(0, 0), true);
assert.strictEqual(Object.is(NaN, 0/0), true);

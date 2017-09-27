#!/usr/bin/env node
'use strict';

const assert = require('assert');

assert.ok(Object.is('foo', 'foo'));
assert.ifError(Object.is('foo', 'bar'));

assert.ifError(Object.is([], []));
const test = { a: 1 };
assert.ok(Object.is(test, test));
assert.ok(Object.is(null, null));
assert.ifError(Object.is({ a: 1 }, { a: 1 }));

assert.ifError(Object.is(0, -0));
assert.ok(Object.is(0, 0));
assert.ok(Object.is(NaN, 0/0));

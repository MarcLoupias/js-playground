'use strict';

require('log-node-version')();

var assert = require('assert');
var values = require('object.values');

var obj = { a: 1, b: 2, c: 3 };
var expected = [1, 2, 3];

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
    // for environments with Symbol support
    var sym = Symbol();
    obj[sym] = 4;
    obj.d = sym;
    expected.push(sym);
}

assert.deepEqual(values(obj), expected);

if (!Object.values) {
    values.shim();
}

assert.deepEqual(Object.values(obj), expected);

#!/usr/bin/env node

'use strict';

var assert = require('assert');
var entries = require('object.entries');

var obj = { a: 1, b: 2, c: 3 };
var expected = [['a', 1], ['b', 2], ['c', 3]];

if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
    // for environments with Symbol support
    var sym = Symbol();
    obj[sym] = 4;
    obj.d = sym;
    expected.push(['d', sym]);
}

assert.deepEqual(entries(obj), expected);

if (!Object.entries) {
    entries.shim();
}

assert.deepEqual(Object.entries(obj), expected);

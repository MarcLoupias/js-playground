'use strict';

require('log-node-version')();

const assert = require('assert');

function namedFunctionTriple(x) {
    return x * 3;
}

// namedFunctionTriple is the same as expressionFunctionTriple

const expressionFunctionTriple = function (x) {
    return x * 3;
};

// both are functions, and both are values.

const expressionFunctionWaffles = expressionFunctionTriple;
assert.equal(expressionFunctionWaffles(30), 90);

const namedFunctionWaffles = namedFunctionTriple;
assert.equal(namedFunctionWaffles(30), 90);

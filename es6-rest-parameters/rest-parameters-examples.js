'use strict';

require('log-node-version')();

const assert = require('assert');

// rest params example using an Array.prototype.reduce function

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

assert.equal(sum(1, 2, 3), 6);

// rest params can be destructured

function sumWithRestParamsThenDestructureThem(...[a, b, c]) {
    return a + b + c;
}

assert.equal(sumWithRestParamsThenDestructureThem(1, 2, 3), 6);

// rest params have to be applied to the last function argument of the signature

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}

assert.deepEqual(multiply(2, 1, 2, 3), [2, 4, 6]);

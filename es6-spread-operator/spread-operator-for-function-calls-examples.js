'use strict';

require('log-node-version')();

const assert = require('assert');

// spread operator example on a function call, used to replace old Function.prototype.apply

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

assert.equal(sum(...numbers), 6);

// spread usage is not limited

const numberList1 = [1, 2];
const numberList2 = [3];

assert.equal(sum(...numberList1, ...numberList2), 6);

'use strict';

require('log-node-version')();

const assert = require('assert');

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

// we want to summarize the amount contained in the orders list

// imperative programming style

let totalAmountImperative = 0;
for(let i = 0; i < orders.length; i++) {
    totalAmountImperative += orders[i].amount;
}
assert.equal(totalAmountImperative, 1075);

// functionnal programming style using higher order function reduce ...

// arr.reduce ( callback, initialValue )
const totalAmountFunctionnal = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0);
assert.equal(totalAmountFunctionnal, 1075);

// using ES6 with arrow functions is even shorter

const totalAmountFunctionnalES6 = orders.reduce((sum, order) => sum + order.amount, 0);
assert.equal(totalAmountFunctionnalES6, 1075);

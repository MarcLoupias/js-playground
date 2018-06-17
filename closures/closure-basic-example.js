'use strict';

require('log-node-version')();

const assert = require('assert');

function counter() {
    let count = 0;
    return {
        getCount: function getCount() {
            return count;
        },
        increment: function increment() {
            count += 1;
        }
    };
}

const counterInstance = counter();

console.log('closure-basic-example - count var is initialized to 0');
assert.equal(counterInstance.getCount(), 0, 'count var in counter function lexical scope is equal to 0');

counterInstance.increment();
assert.equal(counterInstance.getCount(), 1, 'count var in counter function lexical scope is equal to 1');

counterInstance.increment();
counterInstance.increment();
assert.equal(counterInstance.getCount(), 3, 'count var in counter function lexical scope is equal to 3');

let count = counterInstance.getCount();

console.log(`closure-basic-example - counter is ${count}`);

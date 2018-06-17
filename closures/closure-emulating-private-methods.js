'use strict';

require('log-node-version')();

const assert = require('assert');

// using IIFE ...

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

// ... counter var can be used immediatly

assert.equal(counter.value(), 0);

counter.increment();
counter.increment();
assert.equal(counter.value(), 2);

counter.decrement();
assert.equal(counter.value(), 1);

// using a factory function ...

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};

// ... we can build how many counter as we want to

var counter1 = makeCounter();
var counter2 = makeCounter();
assert.equal(counter1.value(), 0);
assert.equal(counter2.value(), 0);

counter1.increment();
counter1.increment();
assert.equal(counter1.value(), 2);
assert.equal(counter2.value(), 0);

counter1.decrement();
assert.equal(counter1.value(), 1);
assert.equal(counter2.value(), 0);


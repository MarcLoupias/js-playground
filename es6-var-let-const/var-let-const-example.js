'use strict';

require('log-node-version')();

const assert = require('assert');

/*
 * `const` means that the identifier can’t be reassigned
 */

const person = {name: 'Robert'};
//person = {name: 'Marcel'}; // throws `TypeError: Assignment to constant variable.`

// `const` have nothing to do with immutability, the variable value is not constant, only the variable reference
assert.equal(person.name, 'Robert');
person.name = 'Marcel';
assert.equal(person.name, 'Marcel', 'const person is mutable');

/*
 *  `let`, is a signal :
 */

// - that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm
let counterObject = {count: 0};
assert.equal(counterObject.count, 0);
counterObject = {count: 1};
assert.equal(counterObject.count, 1);

// - that the variable will be used only in the block it’s defined in, which is not always the entire containing function.
function testLetBlockedScope () {
    let counterObject;
    assert.equal(counterObject, undefined);
    counterObject = {count: 111};
    assert.equal(counterObject.count, 111);
}

testLetBlockedScope();
assert.equal(counterObject.count, 1);

/*
 * `var`
 *
 * is now the weakest signal available when you define a variable in JavaScript.
 * The variable may or may not be reassigned,
 * and may or may not be used for an entire function, or just for the purpose of a block or loop.
 */

#!/usr/bin/env node
'use strict';

const assert = require('assert');

function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    return 'I say: ' + this.saying;
};

var crockford = new Person('SEMICOLANS!!!1on1');
assert.equal(crockford.talk(),'I say: SEMICOLANS!!!1on1');

/*
 * the example above is called by Douglas Crockford the "constructor invocation pattern"
 * he recommands to NOT using it
 *
 * mostly because the omission of the new keyword will not leads to an error
 * so nasty bugs can occurs.
 *
 * N.B. : the class keyword in ES6 is syntax sugar for the "constructor invocation pattern"
 */

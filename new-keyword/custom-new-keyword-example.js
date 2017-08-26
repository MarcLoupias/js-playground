#!/usr/bin/env node
'use strict';

const assert = require('assert');

/*
 * the idea here is to build the new keyword in a function
 *
 * what new does :
 * 1- creating the object
 * 2- setting the prototype
 * 3- executing the constructor with "this"
 * 4- returning the created object
 */

function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    return 'I say: ' + this.saying;
};

function customNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

var crockford = customNew(Person,'SEMICOLANS!!!1on1');
assert.equal(crockford.talk(),'I say: SEMICOLANS!!!1on1');

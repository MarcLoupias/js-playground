#!/usr/bin/env node
'use strict';

const assert = require('assert');

/*
 * empty form
 * */

class Mammal {

}

const fluffykins = new Mammal();
assert.deepEqual(fluffykins, {}, 'fluffykins should be an empty object like a litteral empty object');

/*
 * constructor
 * */

class Mammal2 {
    constructor(sound) {
        this.sound = sound;
    }
}

const fluffykins2 = new Mammal2('woof!');
assert.deepEqual(fluffykins2, {sound: 'woof!'}, 'fluffykins should be an object like a litteral object');

/*
 * methods
 * */

class Mammal3 {
    constructor(sound) {
        this.sound = sound;
    }

    talk() {
        return this.sound;
    }
}

const fluffykins3 = new Mammal3('woof!');
assert.deepEqual(fluffykins3.talk(), 'woof!');

/*
 * inheritance
 * */

class Dog extends Mammal3 {
    constructor() {
        super('dog woof!');
    }
}

const fluffykins3Dog = new Dog();
assert.deepEqual(fluffykins3Dog.talk(), 'dog woof!');

/*
 * classes in ES6 are not really classes ...
 * */

assert.ok('function' === typeof Dog, 'a class is a function');
assert.ok(Dog.prototype.isPrototypeOf(fluffykins3Dog) === true, 'class inheritance is built on top of prototype inheritance');

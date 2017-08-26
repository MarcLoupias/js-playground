#!/usr/bin/env node
'use strict';

const assert = require('assert');

function talk() {
    return this.sound;
}

let animal = {
    talk: talk
};

let cat = {
    sound: 'meow!'
};

let dog = {
    sound: 'woof!'
};

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);

assert.equal(cat.talk(), 'meow!', 'prototype inheritance is about inheritance from object instance, object not class');
assert.equal(dog.talk(), 'woof!', 'prototype inheritance is about inheritance from object instance, object not class');

// We can make an inheritance chain

let prarieDog = {
    howl: function() {
        return this.sound.toUpperCase();
    }
};

Object.setPrototypeOf(prarieDog, dog);

assert.equal(prarieDog.howl(), 'WOOF!', 'prarieDog inherit from dog');

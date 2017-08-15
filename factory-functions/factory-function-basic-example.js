#!/usr/bin/env node
'use strict';

const assert = require('assert');

class Dog {
    constructor() {
        this.sound = 'woof';
    }
    talk() {
        return this.sound;
    }
}

const sniffles = new Dog();
assert.equal(sniffles.talk(), 'woof');

// issue with this.sound when assigning the talk function to something else.

const cat = {
    sound: 'miaou miaw',
    miaou: () => {
        return 'miaou';
    }
};

cat.miaou = sniffles.talk;

assert.notEqual(cat.miaou(), 'woof');

// this in the class will not refer to the instance of Dog class but to the cat literal object

assert.equal(cat.miaou(), 'miaou miaw');

// the fix is to uses bind function

cat.miaou = sniffles.talk.bind(sniffles);

assert.equal(cat.miaou(), 'woof');

// another fix is to wrap in a function

cat.miaou = _ => sniffles.talk();

assert.equal(cat.miaou(), 'woof');

// in javascript we don't have to use classes or the new instruction
// it's better to use factory functions (see closures as basis)

const makeDog = () => {
    const sound = 'woof';
    return {
        talk: () => {
            return sound;
        }
    }
};

const woulfy = makeDog();
assert.equal(woulfy.talk(), 'woof');

cat.miaou = woulfy.talk;
assert.equal(cat.miaou(), 'woof');

/*
 * this example is weird but it could be better with class representing user interface widget where
 * it would be common to assign function like this to event for example
 */

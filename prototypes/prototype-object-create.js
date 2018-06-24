'use strict';

require('log-node-version')();

const assert = require('assert');

const cat = {
    init: function(sound) { // gracefully init object values
        this.sound = sound;
        return this; // enable chaining methods
    },
    makeSound: function() {
        return this.sound;
    }
};

const mark = Object.create(cat).init('mewuuuUUF');
const waffles = Object.create(cat).init('mrrrooooaaaw');

assert.equal(mark.makeSound(), 'mewuuuUUF');
assert.equal(waffles.makeSound(), 'mrrrooooaaaw');
assert.ok(cat.isPrototypeOf(mark));
assert.ok(cat.isPrototypeOf(waffles));

// Object.create impl could be :

function objectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

const mark2 = objectCreate(cat);
mark2.sound = 'mewuuuUUF';
mark2.makeSound();

const waffles2 = objectCreate(cat);
waffles2.sound = 'mrrrooooaaaw';
waffles2.makeSound();

assert.equal(mark2.makeSound(), 'mewuuuUUF');
assert.equal(waffles2.makeSound(), 'mrrrooooaaaw');
assert.ok(cat.isPrototypeOf(mark2));
assert.ok(cat.isPrototypeOf(waffles2));

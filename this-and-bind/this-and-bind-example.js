'use strict';

require('log-node-version')();

const assert = require('assert');

const dog = {
    sound: 'woof',
    talk: function() {
        return this.sound;
    }
};

assert.equal(dog.talk(), 'woof');

const talkFn = dog.talk; // we can assign functions to variables, functions are values

assert.throws(talkFn, function(err) {
    return !!(err instanceof Error && err.message === "Cannot read property 'sound' of undefined");
}, 'this is undefined, accessing it throws an error');

/*
 it is an example of the object oriented influence over javascript clashes with the functionnal
 programming influence.

 JavaScript is influenced by Java and Scheme where the first is OOP language and the second is FP
 language.

 In FP there is no this concept because this means shared state and shared state is evil in FP.
 */

const boundFn = talkFn.bind(dog);

// bind forces the context to dog, so this is defined.
assert.equal(boundFn(), 'woof');

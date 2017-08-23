#!/usr/bin/env node
'use strict';

const assert = require('assert');

// option object management in ES5

function makeSoundES5(options) {
    var species = options.species || 'animal';
    var sound = options.sound;
    return 'The ' + species + ' says ' + sound + '!';
}

assert.equal(
    makeSoundES5({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

function makeSoundES6(options) {
    var { species, sound} = options;
    species = species || 'animal';
    return 'The ' + species + ' says ' + sound + '!';
}

assert.equal(
    makeSoundES6({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

// destructuring can be written in the function signature

function makeSoundES6inFnSig({ species = 'animal', sound }) {
    return 'The ' + species + ' says ' + sound + '!';
}

assert.equal(
    makeSoundES6inFnSig({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

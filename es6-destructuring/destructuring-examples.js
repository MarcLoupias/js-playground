'use strict';

require('log-node-version')();

const assert = require('assert');

// option object management in ES5

function makeSoundES5(options) {
    const species = options.species || 'animal';
    const sound = options.sound;
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES5({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

function makeSoundES6(options) {
    let { species, sound } = options;
    species = species || 'animal';
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES6({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

// destructuring can be written in the function signature with default values

function makeSoundES6inFnSig({ species = 'animal', sound }) {
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES6inFnSig({weight: 23, sound: 'woof'}),
    'The animal says woof!'
);

// destructuring can be applied on arrays

function makeSoundES6array(props) {
    const [, species, sound] = props;
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES6array([23, 'animal', 'woof']),
    'The animal says woof!'
);

// ignoring items must be explicit, forgetting comma, leads to errors

function makeSoundES6arrayForgetComma(props) {
    const [species, sound] = props;
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES6arrayForgetComma([23, 'animal', 'woof']),
    'The 23 says animal!'
);

// default values works also for arrays

function makeSoundES6arrayDefaultValues(props) {
    const [, species = 'gnou', sound = 'yeah'] = props;
    return `The ${ species } says ${ sound }!`;
}

assert.equal(
    makeSoundES6arrayDefaultValues([23]),
    'The gnou says yeah!'
);

// destructuring can be nested

function makeSoundES6nested({ species: { name }, sounds: [, angry] }) {
    return `The ${ name } yell ${ angry }!`;
}

assert.equal(
    makeSoundES6nested({ species: { id: 1, name: 'gnou' }, sounds: ['woof', 'grrr'] }),
    'The gnou yell grrr!'
);

// destructured props can be renamed locally

function makeSoundES6nestedAndRenamed({ species: { name: littleName }, sounds: [, yellingSound] }) {
    return `The ${ littleName } yell ${ yellingSound }!`;
}

assert.equal(
    makeSoundES6nestedAndRenamed({ species: { id: 1, name: 'gnou' }, sounds: ['woof', 'grrr'] }),
    'The gnou yell grrr!'
);

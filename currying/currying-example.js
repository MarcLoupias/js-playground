#!/usr/bin/env node
'use strict';

const assert = require('assert');
const _ = require('lodash');

const output = 'fluffykins is a tiny dragon that breathes lightning!';

// a basic function with 3 parameters

const dragonNotCurried = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

assert.equal(
    dragonNotCurried('fluffykins', 'tiny', 'lightning'),
    output
);

// same function but curried manually (with ES6 arrow functions)

const dragonCurried =
    name =>
        size =>
            element =>
            name + ' is a ' + size + ' dragon that breathes ' + element + '!';

assert.equal(
    dragonCurried('fluffykins')('tiny')('lightning'),
    output
);

// same as above but step by step

const fluffykinsDragonCurried = dragonCurried('fluffykins');
const tinyDragon = fluffykinsDragonCurried('tiny');

assert.equal(
    tinyDragon('lightning'),
    output
);

// some libs like lodash supply generic currying function

const dragonCurriedWithLodash = _.curry(dragonNotCurried);
const fluffykinsDragonCurriedWithLodash = dragonCurriedWithLodash('fluffykins');
const tinyDragonCurriedWithLodash = fluffykinsDragonCurriedWithLodash('tiny');

assert.equal(
    tinyDragonCurriedWithLodash('lightning'),
    output
);

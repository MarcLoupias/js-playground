#!/usr/bin/env node
'use strict';

const assert = require('assert');

const cat = { breed: 'munchkin' };
const otherCat = { breed: 'munchkinino' }
const myCat = { name: 'Fluffykins' };

Object.setPrototypeOf(myCat, cat);

assert.strictEqual(myCat.__proto__, cat, 'myCat prototype is cat');
assert.notStrictEqual(myCat.__proto__, otherCat, 'myCat prototype is NOT otherCat');
assert.equal(myCat.breed, 'munchkin');

// __proto__ is internal reference to the prototype instance

assert.strictEqual(myCat.tailLength, undefined);
cat.tailLength = 15;
assert.strictEqual(myCat.tailLength, 15);

// the prototype chains start is the global instance Object

assert.strictEqual(
    myCat.__proto__.__proto__, Object.prototype,
    'all objects are prototype chained to the Object globally defined by javascript'
);
assert.ok(
    typeof Object === 'function',
    'the global instance Object is not a literal object, it is a function'
);
assert.ok(
    typeof Object() === 'object',
    'the global instance Object function execution returns the global literal object'
);

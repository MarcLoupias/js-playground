'use strict';

require('log-node-version')();

const assert = require('assert');

// spread operator example on an object literal, shorter syntax then Object.assign ...

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

// ... to clone objects ...

const clonedObj = { ...obj1 };

assert.deepEqual(clonedObj, obj1);

// ... or to merge them ...

const mergedObj = { ...obj1, ...obj2 };

assert.deepEqual(mergedObj, { foo: 'baz', x: 42, y: 13 });

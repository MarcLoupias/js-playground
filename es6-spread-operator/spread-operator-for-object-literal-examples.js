'use strict';

require('log-node-version')();

const assert = require('assert');

// spread operator example on an array literal, used to replace usage of a combination of push, splice, concat, etc.

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];

assert.deepEqual(lyrics, ['head', 'shoulders', 'knees', 'and', 'toes']);

// easier to concatenate arrays

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];

assert.deepEqual(arr3, [0, 1, 2, 3, 4, 5]);

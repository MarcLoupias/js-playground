#!/usr/bin/env node
'use strict';

const assert = require('assert');
const add = require('./add');
const sub = require('./sub');
const mult = require('./mult');

assert.equal(add(4, 5), 9);

assert.equal(sub(10, 5), 5);

assert.equal(mult(10, 5), 50);

#!/usr/bin/env node
'use strict';

const assert = require('assert');
const add = require('./add');

assert.equal(add(4, 5), 9);

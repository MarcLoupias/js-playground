#!/usr/bin/env node
'use strict';

const assert = require('assert');



const source = { a: 1 };
const target = {};

const resValue = Object.assign(target, source);

assert.deepEqual(target, source, 'source properties are copied into target object');
assert.notEqual(target, source, 'copy is by value');
assert.equal(target, resValue, 'the return value is the same object as target');


const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
assert.deepEqual(obj1, obj2, 'obj1 props are copied into obj2');
assert.notEqual(obj1, obj2, 'obj1 and obj2 are differents instances');

obj1.a = 1;
assert.notDeepEqual(obj1, obj2, 'a prop change on obj1 have no effect on obj2');

obj2.a = 2;
assert.notDeepEqual(obj1, obj2, 'a prop change on obj2 have no effect on obj1');

obj2.a = 1;
obj2.b.c = 3;
assert.deepEqual(obj1, obj2, 'Object.assign is not performing a deep clone');
assert.equal(obj1.b, obj2.b, 'nested literals are copied by reference, not by value');

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const mergedRef = Object.assign(o1, o2, o3);
assert.deepEqual(mergedRef, { a: 1, b: 2, c: 3}, 'Object.assign can merge multiples objects into one');
assert.equal(mergedRef, o1, 'the target object is returned by ref by assign function');
assert.deepEqual(o1, { a: 1, b: 2, c: 3});

const o4 = { a: 1, b: 1, c: 1 };
const o5 = { b: 2, c: 2 };
const o6 = { c: 3 };

const mergedRefWithOverwrite = Object.assign({}, o4, o5, o6);
assert.deepEqual(mergedRefWithOverwrite, { a: 1, b: 2, c: 3 }, 'props collisions are resolved simply by overwritting the last value');

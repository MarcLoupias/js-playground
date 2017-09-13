#!/usr/bin/env node
'use strict';

const assert = require('assert');
const stamp = require('@stamp/it');

const InitFoo = stamp.compose({
    initializers: [function (foo) {
        if (foo) this.foo = foo;
    }]
});
const obj = InitFoo('incoming foo!');
assert.equal(obj.foo, 'incoming foo!');

// a shorter syntax is possible by using latest stampit or stampit v3.

const InitFoo2 = stamp.init(function(foo) {
    if (foo) this.foo = foo;
});
const obj2 = InitFoo2('incoming foo!');
assert.equal(obj2.foo, 'incoming foo!');

// you can compose that stamp too:

const HasFoo = stamp.compose({
    properties: {
        foo: 'default foo!'
    }
});

const GetFoo = stamp.compose({
    methods: {
        getFoo() {
            return this.foo || 'There is no foo';
        }
    }
});

const Foo = stamp.compose(HasFoo, GetFoo, InitFoo);
const obj3 = Foo('incoming foo!');
assert.equal(obj3.foo, 'incoming foo!');
assert.equal(obj3.getFoo(), 'incoming foo!');

// Statics — properties on stamp

const TraceStampMetaData = stamp.compose({
    staticProperties: {
        trace() {
            return `This stamp consists of ${this.compose}`;
        }
    }
});

const Foo2 = Foo.compose(TraceStampMetaData);
console.log('Foo2 stamp meta-data');
console.log(Foo2.trace()); // will print the Foo2 stamp meta-data. See below!
console.log('---');

// Breaking down a stamp into pieces

console.log('Breaking down a stamp into pieces');
console.log(Foo);
console.log('---');

// Objects created by stamps

const obj4 = Foo();
console.log('Objects created by stamps');
console.log(obj4.getFoo()); // { foo: 'default foo!' } ??? bug ???
console.log('---');
console.log(Object.getPrototypeOf(obj4));
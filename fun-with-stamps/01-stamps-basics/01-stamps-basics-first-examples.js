'use strict';

require('log-node-version')();

const assert = require('assert');
const stamp = require('stampit');

// it can create empty objects!

const EmptyStamp = stamp.compose();
const obj = EmptyStamp();
assert.deepEqual(obj, {});

// let’s make our stamp produce objects with the property foo.

const HasFoo = stamp.compose({
    properties: {
        foo: 'default foo!'
    }
});
const obj2 = HasFoo();
assert.equal(obj2.foo, 'default foo!');

// let’s create a stamp which will produce objects with the method GetFoo.

const GetFoo = stamp.compose({
    methods: {
        getFoo() {
            return (this.foo || 'There is no foo');
        }
    }
});
const obj3 = GetFoo();
assert.equal(obj3.getFoo(), 'There is no foo');

// let’s compose those two:

const Foo = stamp.compose(HasFoo, GetFoo);
const obj4 = Foo();
assert.equal(obj4.getFoo(), 'default foo!');

// Alternatively you can compose them like this:

const Foo2 = HasFoo.compose(GetFoo);
const obj5 = Foo2();
assert.equal(obj5.getFoo(), 'default foo!');

// or

const Foo3 = GetFoo.compose(HasFoo);
const obj6 = Foo3();
assert.equal(obj6.getFoo(), 'default foo!');

// or

const Foo4 = stamp.compose().compose(HasFoo).compose(GetFoo);
const obj7 = Foo4();
assert.equal(obj7.getFoo(), 'default foo!');

// or

const Foo5 = stamp.compose(HasFoo).compose(GetFoo);
const obj8 = Foo5();
assert.equal(obj8.getFoo(), 'default foo!');

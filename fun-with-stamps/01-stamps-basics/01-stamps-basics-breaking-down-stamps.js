#!/usr/bin/env node
'use strict';

const {compose, init} = require('stampit');

const HasFoo = compose({
    properties: {
        foo: 'default foo!'
    }
});

const PrintFoo = compose({
    methods: {
        printFoo() {
            console.log(this.foo || 'There is no foo');
        }
    }
});

const InitFoo = init(function(foo) {
    console.log('init arg value is ', foo);
    if (foo) this.foo = foo;
});

const Foo = compose(HasFoo, PrintFoo, InitFoo);

const objNoArg = Foo();
console.log('objNoArg :', objNoArg);

const objArgNull = Foo(null);
console.log('objArgNull :', objArgNull);

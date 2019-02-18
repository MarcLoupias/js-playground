'use strict';

require('log-node-version')();

const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];

const iterator = dragons[Symbol.iterator]();
console.log(iterator.next()); // { value: 'cool dragon', done: false }
console.log(iterator.next()); // { value: 'angry dragon', done: false }
console.log(iterator.next()); // { value: 'nasty dragon', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

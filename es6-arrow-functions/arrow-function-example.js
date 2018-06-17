'use strict';

require('log-node-version')();

const assert = require('assert');

const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40},
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'player-fluffykins' },
    { type: 'attack', value: 12, target: 'player-dorkman' }
];

const totalDamageOnDorkmanES5 = dragonEvents
    .filter(function(event) {
        return event.type === 'attack';
    })
    .filter(function(event) {
        return event.target === 'player-dorkman';
    })
    .map(function(event) {
        return event.value;
    })
    .reduce(function(prev, value) {
        return (prev || 0) + value;
    });

assert.equal(totalDamageOnDorkmanES5, 24);

// basic arrow function refactoring

const totalDamageOnDorkmanES6 = dragonEvents
    .filter((event) => {
        return event.type === 'attack';
    })
    .filter((event) => {
        return event.target === 'player-dorkman';
    })
    .map((event) => {
        return event.value;
    })
    .reduce((prev, value) => {
        return (prev || 0) + value;
    });

assert.equal(totalDamageOnDorkmanES6, 24);

// if the inner function contains a single statement, the return and the curly brances can be removed
// nb: if the inner function signature contains only one parameter, the () can be removed

const totalDamageOnDorkmanES6inline = dragonEvents
    .filter(event => event.type === 'attack')
    .filter(event => event.target === 'player-dorkman')
    .map(event => event.value)
    .reduce((prev, value) => (prev || 0) + value);

assert.equal(totalDamageOnDorkmanES6inline, 24);

// code reuse is even easier with single purpose function

const reduceTotal = (prev, value) => (prev || 0) + value;
const isAttack = event => event.type === 'attack';

const totalDamageOnDorkmanES6inlineReuse = dragonEvents
    .filter(isAttack)
    .filter(event => event.target === 'player-dorkman')
    .map(event => event.value)
    .reduce(reduceTotal);

assert.equal(totalDamageOnDorkmanES6inlineReuse, 24);
#!/usr/bin/env node
'use strict';

const assert = require('assert');

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

// we want an array containing the animals names

// imperative programming style

const dogNameListImperative = [];
for(let i = 0; i < animals.length; i++) {
    dogNameListImperative.push(animals[i].name);
}
const dogsOutput = [
    'Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy'
];
assert.deepStrictEqual(dogNameListImperative, dogsOutput);

// functionnal programming style using higher order function map ...

const dogsNameListFunctionnal = animals.map(function(animal) {
    return animal.name;
});
assert.deepStrictEqual(dogsNameListFunctionnal, dogsOutput);

// using ES6 with arrow functions is even shorter

const dogsNameListFunctionnalES6 = animals.map((animal) => { return animal.name; });
assert.deepStrictEqual(dogsNameListFunctionnalES6, dogsOutput);

// if the map function is only returning a value, we can make it even shorter (return and {} are implicit)

const dogsNameListFunctionnalES6shorter = animals.map((animal) => animal.name);
assert.deepStrictEqual(dogsNameListFunctionnalES6shorter, dogsOutput);

'use strict';

require('log-node-version')();

const assert = require('assert');

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

// we want to filter animals on dogs species

// imperative programming style

const dogsImperativeFiltered = [];
for(let i = 0; i < animals.length; i++) {
    if(animals[i].species === 'dog')
        dogsImperativeFiltered.push(animals[i]);
}
const dogsOutput = [
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' }
];
assert.deepStrictEqual(dogsImperativeFiltered, dogsOutput);

// functionnal programming style using higher order function filter ...

const dogsFunctionnalFiltered = animals.filter(function(animal) {
    return animal.species === 'dog';
});
assert.deepStrictEqual(dogsFunctionnalFiltered, dogsOutput);

// ... using expression function to filter (better separation of concerns)

const isDog = function(animal) {
    return animal.species === 'dog';
};
const dogsFunctionnalFilteredWithExpressionFunction = animals.filter(isDog);
assert.deepStrictEqual(dogsFunctionnalFilteredWithExpressionFunction, dogsOutput);

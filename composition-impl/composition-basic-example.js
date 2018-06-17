'use strict';

require('log-node-version')();

const assert = require('assert');

/*
 * this is factories function for a behavior accepting the state from params instead
 * of managing it internally (witch would have been the case in an inheritance design pattern
 */

const barker = (state) => ({
    bark: () => {return 'Woof, I am ' + state.name;}
});
assert.equal(barker({name: 'karo'}).bark(), 'Woof, I am karo');

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
});

let driverExampleState = {
    position: 0,
    speed: 10
};

driver(driverExampleState).drive();
assert.deepStrictEqual(driverExampleState, {position: 10, speed: 10});

const killer = (state) => ({
    kill: () => {return 'Woof, I am ' + state.name + ' the killer';}
});
assert.equal(killer({name: 'karo'}).kill(), 'Woof, I am karo the killer');

/*
 * see https://marcloupias.gitbooks.io/memo-dev/content/software-engineering/composition-over-inheritance.html
 * to understand the composition over inheritance problem
 */

const makeMurderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    };
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    );
};

let theMurderRobotDogSniffles = makeMurderRobotDog('sniffles');

assert.equal(theMurderRobotDogSniffles.bark(), 'Woof, I am sniffles');
// cannot test driver from here because state is in the closure
assert.equal(theMurderRobotDogSniffles.kill(), 'Woof, I am sniffles the killer');

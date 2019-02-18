'use strict';

require('log-node-version')();
const makeDragon = require('./make-dragon');

console.log(makeDragon());

const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                if (!enoughDragonsSpawned) {
                    return {
                        value: makeDragon(),
                        done: false
                    };
                }

                return { done: true };
            }
        };
    }
};

for (const dragon of dragonArmy) {
    console.log(dragon);
}

// dragonArmy size is different at each run, so iteration number vary
// each dragon is generated

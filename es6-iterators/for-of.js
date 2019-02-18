'use strict';

require('log-node-version')();

const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];

for (const dragon of dragons) {
    console.log(dragon); // cool dragon, angry dragon, nasty dragon
}

// for of can apply to more then array

for (const dragon of dragons[0]) {
    console.log(dragon); // c, o, o, l, , ,d, r, a, g, o, n
}

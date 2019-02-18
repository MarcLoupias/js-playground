'use strict';

require('log-node-version')();

const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];

for (const dragon in dragons) {
    console.log(typeof dragon === 'string');
    console.log(dragon); // 0, 1, 2
}

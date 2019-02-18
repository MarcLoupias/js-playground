'use strict';

require('log-node-version')();
const makeDragon = require('./make-dragon');

function* someDragons() {
    while(true) {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (enoughDragonsSpawned) return;
        yield makeDragon();
    }
}

const iterator = someDragons();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// simpler example without the loop

function* someDragonsSimpler() {
    console.log('yield 1');
    yield 'fluffy dragon';
    console.log('yield 2');
    yield 'marco le dragon';
    console.log('yield 3');
    yield 'coco l\'asticot';
    // return 'coco l\'asticot'; could have write last statement with return
}

const iterator2 = someDragonsSimpler();
console.log(iterator2.next()); // { value: 'fluffy dragon', done: false }
console.log(iterator2.next()); // { value: 'marco le dragon', done: false }
console.log(iterator2.next()); // { value: "coco l'asticot", done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

// notice that yield 1, 2, and 3 are ran only when next() function is called and not
// when someDragonsSimpler is called.
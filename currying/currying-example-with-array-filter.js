'use strict';

require('log-node-version')();

const assert = require('assert');
const _ = require('lodash');

const dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'karo', element: 'fire' },
    { name: 'doomer', element: 'timewarp' }
];

const output = [{ name: 'fluffykins', element: 'lightning' }, { name: 'noomi', element: 'lightning' }];

const hasElement = (element, obj) => obj.element === element;
const lightingDragons = dragons.filter(x => hasElement('lightning', x));
assert.deepEqual(lightingDragons, output);

// same but with lodash to curry hasElement function

const hasElementCurriedWithLodash = _.curry((element, obj) => obj.element === element);
const lightingDragonsWithLodash = dragons.filter(hasElementCurriedWithLodash('lightning'));
assert.deepEqual(lightingDragonsWithLodash, output);

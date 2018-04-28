'use strict';

const _ = require('./node_modules/lodash');

const logList = [];

function add(a, b) {
    const total = _.add(a, b);

    logList.push({ a, b, total });

    return total;
}

function getLastLogString() {
    const lastLog = logList.slice(-1)[0];

    return `${ lastLog.a } + ${ lastLog.b } = ${ lastLog.total }`;
}

module.exports =  {
    add: add,
    getLastLogString: getLastLogString
};





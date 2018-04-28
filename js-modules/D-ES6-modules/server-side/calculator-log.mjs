'use strict';

const logList = [];

function addNewLog({ a, b, total }) {
    logList.push({ a, b, total });
}

function getLogs() {
    return logList.map((log) => {
        return `${ log.a } + ${ log.b } = ${ log.total }`;
    });
}

export { addNewLog, getLogs };

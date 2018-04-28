'use strict';

const calcLog = require('./calculator-log');

function calcLogGetHandlerFn(response) {
    const responseBody = {logs: calcLog.getLogs()};

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.write(JSON.stringify(responseBody));
    response.end();
}

module.exports = calcLogGetHandlerFn;
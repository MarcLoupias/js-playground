'use strict';

const _ = require('lodash');
const calcLog = require('./calculator-log');

function calcAddPostHandlerFn(response, reqPayload) {
    const sum = _.add(parseInt(reqPayload.a), parseInt(reqPayload.b));

    calcLog.addNewLog({ a: reqPayload.a, b: reqPayload.b, total: sum });

    const responseBody = {sum: sum};

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.write(JSON.stringify(responseBody));
    response.end();
}

module.exports = calcAddPostHandlerFn;
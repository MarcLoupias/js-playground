'use strict';

import { getLogs } from './calculator-log';

function calcLogGetHandlerFn(response) {
    const responseBody = {logs: getLogs()};

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.write(JSON.stringify(responseBody));
    response.end();
}

export { calcLogGetHandlerFn as calcLogGetHandler };

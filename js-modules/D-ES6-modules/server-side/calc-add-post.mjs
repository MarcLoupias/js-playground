'use strict';

import _ from 'lodash';
import { addNewLog } from './calculator-log';

function calcAddPostHandlerFn(response, reqPayload) {
    const sum = _.add(parseInt(reqPayload.a), parseInt(reqPayload.b));

    addNewLog({ a: reqPayload.a, b: reqPayload.b, total: sum });

    const responseBody = {sum: sum};

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.write(JSON.stringify(responseBody));
    response.end();
}

export { calcAddPostHandlerFn as calcAddPostHandler };

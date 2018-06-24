'use strict';

import http from 'http';
import { registerRoute, getRouteHandler } from './router';

import { calcAddPostHandler } from './calc-add-post';
import { calcLogGetHandler } from './calc-log-get';

registerRoute({ url:'/add', method: 'POST', handlerFn: calcAddPostHandler });
registerRoute({ url:'/logs', method: 'GET', handlerFn: calcLogGetHandler });

function requestListener(request, response) {
    request.on('error', onErrorEvent);
    response.on('error', onErrorEvent);

    const routeHandlerFn = getRouteHandler({ url: request.url, method: request.method });
    if(!routeHandlerFn) {
        respond404(response);

    } else {
        let data = [];
        request.on('data', requestOnDataEvent(data));
        request.on('end', requestOnEndEvent(data, response, routeHandlerFn));
    }
}

function onErrorEvent(err) {
    console.error(err);
}

function respond404(response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({ msg: http.STATUS_CODES[404]}));
    response.end();
}

function requestOnDataEvent(data) {
    return function(chunk) {
        console.log('data > chunk > ', chunk.toString());
        data.push(chunk);
    };
}

function requestOnEndEvent(data, response, routeHandlerFn) {
    return function() {
        data = Buffer.concat(data).toString();
        console.log('end > full body > ', data);

        routeHandlerFn(response, ((data) ? JSON.parse(data) : null));
    };
}

export default { requestListener };
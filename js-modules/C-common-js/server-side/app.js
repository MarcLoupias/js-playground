'use strict';

const http = require('http');
const router = require('./router');

const calcAddPost = require('./calc-add-post');
const calcLogGet = require('./calc-log-get');

router.registerRoute({ url:'/add', method: 'POST', handlerFn: calcAddPost });
router.registerRoute({ url:'/logs', method: 'GET', handlerFn: calcLogGet });

function requestListener(request, response) {
    request.on('error', onErrorEvent);
    response.on('error', onErrorEvent);

    const routeHandlerFn = router.getRouteHandler({ url: request.url, method: request.method });
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

module.exports = requestListener;
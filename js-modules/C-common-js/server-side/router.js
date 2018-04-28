'use strict';

const routes = {};

/*
 * a route object is
 *   route.url
 *   route.method
 *   route.handlerFn
 *
 * The handlerFn is fired by the request end event
 */

function registerRoute(route) {
    routes[`${route.url}_${route.method}`] = route;
}

function getRouteHandler({ url, method }) {
    const route = routes[`${url}_${method}`];
    return route ? route.handlerFn : null;
}

module.exports = {
    registerRoute,
    getRouteHandler
};

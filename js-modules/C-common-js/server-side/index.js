'use strict';

require('log-node-version')();

const http = require('http');
const app = require('./app');

http
    .createServer(app)
    .listen(8080);

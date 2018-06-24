'use strict';

import logNodeVersion from 'log-node-version';

import http from 'http';
import app from './app';

logNodeVersion();

http
    .createServer(app.requestListener)
    .listen(8080);

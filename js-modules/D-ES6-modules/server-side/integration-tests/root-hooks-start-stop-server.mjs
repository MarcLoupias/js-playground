'use strict';

import logNodeVersion from 'log-node-version';

import http from 'http';
import app from './../app';

logNodeVersion();

let server;

/* working solution : https://gist.github.com/BoyCook/5274570
 * mocha root hooks : https://mochajs.org/#root-level-hooks
 * */

before(function (done) {
    server = http.createServer(app.requestListener);
    server.listen(8080, done);
    console.log('Integration test server started on http://localhost:8080/');
});

after(function (done) {
    server.close();
    if (done) {
        console.log('Integration test server closed');
        done();
    }
});

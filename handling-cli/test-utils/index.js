'use strict';

const spawn = require('child_process').spawn;
const spawnSync = require('child_process').spawnSync;
const concat = require('concat-stream');

function createProcess(processPath, args = [], env = null) {
    args = [processPath].concat(args);

    return spawn('node', args, {
        env: Object.assign(
            {
                NODE_ENV: 'test'
            },
            env
        )
    });
}

function executeAsync(processPath, args = [], opts = {}) {
    const { env = null } = opts;
    const childProcess = createProcess(processPath, args, env);
    childProcess.stdin.setEncoding('utf-8');

    return new Promise((resolve, reject) => {
        childProcess.stderr.once('data', err => {
            reject(err.toString());
        });

        childProcess.on('error', reject);

        childProcess.stdout.pipe(
            concat(result => {
                resolve(result.toString());
            })
        );
    });
}

function executeSync(processPath, args = [], opts = {}) {
    return spawnSync(processPath, args, opts);
}

module.exports = { executeAsync, executeSync };
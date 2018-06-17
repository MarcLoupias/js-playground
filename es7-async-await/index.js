'use strict';

require('log-node-version')();

function resolveAfter4Seconds(context) {
    return new Promise(resolve => {
        setTimeout(() => {
            const timestamp = new Date().toString();
            console.log(`${context} ${timestamp}`);
            resolve('resolved');
        }, 4000);
    });
}

async function asyncCall(context) {
    return resolveAfter4Seconds(context);
}

async function callAllAwait() {
    const timestamp = new Date().toString();
    console.log(`start callAllAwait at ${timestamp}`);

    const a = await asyncCall('call > AllAwait');
    const b = await asyncCall('call > AllAwait');
    return a + b;
}

async function callAllParallelized() {
    const timestamp = new Date().toString();
    console.log(`start callAllParallelized at ${timestamp}`);

    const a = asyncCall('call > AllParallelized');
    const b = asyncCall('call > AllParallelized');
    return await a + await b;
}

callAllAwait()
    .then(() => {
        console.log('all await done at ' + new Date().toString());
    });

callAllParallelized()
    .then(() => {
        console.log('all parallelized done at ' + new Date().toString());
    });

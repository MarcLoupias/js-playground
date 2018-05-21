'use strict';

function resolveAfter4Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            const timestamp = new Date().toString();
            console.log(`${timestamp}`);
            resolve('resolved');
        }, 4000);
    });
}

async function asyncCall() {
    return resolveAfter4Seconds();
}

async function callAllAwait() {
    const a = await asyncCall();
    const b = await asyncCall();
    return a + b;
}

async function callAllParallelized() {
    const a = asyncCall();
    const b = asyncCall();
    return await a + await b;
}

console.log(`starting node version: ${process.version}`);

callAllAwait()
    .then(() => {
        console.log('all await done at ' + new Date().toString());
    });

callAllParallelized()
    .then(() => {
        console.log('all parallelized done at ' + new Date().toString());
    });

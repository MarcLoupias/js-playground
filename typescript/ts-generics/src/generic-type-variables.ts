'use strict';

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function loggingIdentitySame<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

console.log(loggingIdentity<string>(['i am a string']));
console.log(loggingIdentitySame<string>(['i am a string']));

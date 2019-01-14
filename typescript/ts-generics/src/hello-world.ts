'use strict';

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>('i am a string'));
console.log(identity<number>(666));
console.log(identity('i am also a string'));

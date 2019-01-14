'use strict';

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add(1, 2));

const myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = '';
myGenericString.add = function(x, y) { return x + y; };

console.log(myGenericString.add('1', '2'));

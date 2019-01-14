'use strict';

interface Lengthwise {
    length: number;
}

function loggingIdentityWithConstraints<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// due to duck typing, arg just need to hold a length prop to be compatible with the constraint, it don't need to explicitly implements the interface

loggingIdentityWithConstraints({length: 10, value: 3});

// ...

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); will lead to : "error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'."

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!

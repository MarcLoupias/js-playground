'use strict';

/*
 * <T> define the type to capture
 * (arg: T) is the function argument signature part, typing it with captured type
 * : T is the function return value signature part, typing it with captured type
 */

function identityGenericTypes<T>(arg: T): T {
    return arg;
}

// myIdentity is typed with a function signature, then the impl is assigned to the variable myIdentity
const myIdentity: <T>(arg: T) => T = identityGenericTypes;

// the <U> part is just the variable name for the type to capture, it can be anything as long as it is consistent across the capturing process
// so the generics naming doesn't have to match strictly with the impl
const myIdentitySame: <U>(arg: U) => U = identityGenericTypes;

console.log(myIdentity<string>('i am a string'));
console.log(myIdentitySame<string>('i am also a string'));

const myObjIdentity: {<T>(arg: T): T} = identityGenericTypes;
console.log(myObjIdentity<string>('i am also again a string'));

interface NonGenericIdentityFn {
    <T>(arg: T): T;
}

const myIdentityWithInterface: NonGenericIdentityFn = identityGenericTypes;

console.log(myIdentityWithInterface<string>('i am a string through an interface'));

// the function become a non-generic function inside a generic interface. The function is typed by the interface generic

interface GenericIdentityFn<T> {
    (arg: T): T;
}

const myIdentityTypedByInterface: GenericIdentityFn<string> = identityGenericTypes;
console.log(myIdentityTypedByInterface('i am a string return by a function typed by the interface'));

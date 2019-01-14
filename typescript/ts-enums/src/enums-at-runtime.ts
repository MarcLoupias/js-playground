'use strict';

enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

// reverse enum

enum Enum {
    A
}
let a = Enum.A;
console.log(Enum[a]); // "A"

// const enums

const enum ConstDirections {
    Up,
    Down,
    Left,
    Right
}

let directions = [ConstDirections.Up, ConstDirections.Down, ConstDirections.Left, ConstDirections.Right]

console.log(directions);
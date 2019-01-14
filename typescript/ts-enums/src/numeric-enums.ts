'use strict';

enum NumericDirection {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(NumericDirection.Up);
console.log(NumericDirection.Down);
console.log(NumericDirection.Left);
console.log(NumericDirection.Right);

enum CustomResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: CustomResponse): string {
    return `${recipient} ${message}`;
}

console.log(respond("Princess Caroline", CustomResponse.Yes));

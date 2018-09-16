"use strict";
exports.__esModule = true;
function greeterWithDestructuring(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "Hello, " + firstName + " " + lastName;
}
var user = { firstName: 'Marco', lastName: 'Loupias' };
console.log(greeterWithDestructuring(user));

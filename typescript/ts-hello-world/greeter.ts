function greeter(person: string) {
    return `Hello, ${person}`;
}

const user = "Marco User";

// to test : error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'
//const user = "Marco User";

console.log(greeter(user));
class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

export interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = new Student('Marco', 'M.', 'Loupias')

console.log(greeter(user));

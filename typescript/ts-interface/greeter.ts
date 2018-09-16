import { Person } from './person';

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = { firstName: 'Marco', lastName: 'Loupias' };

console.log(greeter(user));

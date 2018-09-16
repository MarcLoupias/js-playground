import { Person } from './person';

function greeterWithDestructuring({ firstName, lastName }: Person) {
    return `Hello, ${firstName} ${lastName}`;
}

const user = { firstName: 'Marco', lastName: 'Loupias' };

console.log(greeterWithDestructuring(user));

'use strict';

class Student {
    constructor({ firstName, lastName, age, sex }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }

    set age(age) {
        this._age = parseInt(age);
    }

    get age() {
        return this._age;
    }
}

module.exports = Student;
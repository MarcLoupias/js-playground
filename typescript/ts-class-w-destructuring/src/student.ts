'use strict';

export default class Student {
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    protected sex: string;

    protected constructor(firstName: string, lastName: string, age: number, sex: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }

    public static newStudent(firstName: string, lastName: string, age: string, sex: string): Student {
        return new Student(
            firstName,
            lastName,
            parseInt(age),
            sex
        );
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getAge(): number {
        return this.age;
    }

    public getSex(): string {
        return this.sex;
    }
}
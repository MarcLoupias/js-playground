'use strict';

import Student from './student';

export default class Course {
    protected name:string;
    protected studentList: Student[];

    protected constructor(name: string, studentList: Student[]) {
        this.name = name;
        this.studentList = studentList;
    }

    public static newCourse(name: any, studentList: any) {
        return new Course(
            name,
            [...studentList.map((st: any) => Student.newStudent(st.firstName, st.lastName, st.age, st.sex))]
        );
    }

    public getName(): string {
        return this.name;
    }

    public getStudentList(): Student[] {
        return this.studentList;
    }
}
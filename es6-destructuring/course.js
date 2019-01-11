'use strict';

const Student = require('./student');

class Course {
    constructor({ name, studentList }) {
        this.name = name;
        this.studentList = studentList;
    }

    set studentList(studentList) {
        this._studentList = [...studentList.map((student) => new Student(student))];
    }

    get studentList() {
        return this._studentList;
    }
}

module.exports = Course;
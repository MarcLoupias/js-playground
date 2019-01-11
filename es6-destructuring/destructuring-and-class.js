'use strict';

require('log-node-version')();

const assert = require('assert');

const Course = require('./course');
const Student = require('./student');

const cookingCourse = {
    name: 'La course du cooking',
    studentList: [
        { firstName: 'Robert', lastName: 'Duchmoul', age: '18', sex: 'M' },
        { firstName: 'Marcelle', lastName: 'Vincent', age: '16', sex: 'F' }
    ]
};

const theCourse = new Course(cookingCourse);
console.log('theCourse is ', theCourse);

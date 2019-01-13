'use strict';

import Course from './course';

const cookingCourse = {
    name: 'La course du cooking',
    studentList: [
        { firstName: 'Robert', lastName: 'Duchmoul', age: '18', sex: 'M' },
        { firstName: 'Marcelle', lastName: 'Vincent', age: '16', sex: 'F' }
    ]
};

const theCourse = Course.newCourse(cookingCourse.name, cookingCourse.studentList);
console.log('theCourse is ', theCourse);

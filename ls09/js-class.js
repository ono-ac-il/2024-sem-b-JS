var studentObject = {
    year: 2024
};

studentObject.courses = ['course a', 'course b'];

console.log(studentObject);

class Student {
    constructor(year) {
        this.year = year;

    }
}

const student1 = new Student(2024);
student1.courses = ['course a', 'course b'];

console.log(student1)
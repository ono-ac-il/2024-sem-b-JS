class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

const student1 = new Student("A", "B");
const student2 = new Student("C", "D");

console.log("student1.getFullName", student1.getFullName())
console.log("student2.getFullName", student2.getFullName())

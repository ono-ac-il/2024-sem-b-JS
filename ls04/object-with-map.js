const grade1 = {
    name: "Excel",
    teacher: "amit",
    finalGrade: null
};
const grade2 = {
    name: "Programming",
    teacher: "Yaakov",
    finalGrade: 100
};
const grade3 = {
    name: "DSS",
    teacher: "Betty",
    finalGrade: 100
};

const grades = [grade1, grade2, grade3];

function mapGradeObject(g) {
    // if finalGrade is null, write "No grade" instead of the grade
    return "<p>Course name: " + g.name +
        ", Teacher name: " + g.teacher + ", Grade: "
        + g.finalGrade + "</p>";
}

/*
const _mappedGrades = []
for (var i = 0; i < grades.length; i++) {
    var str = mapGradeObject(grades[i]);
    _mappedGrades.push(str);
}*/

const mappedGrades = grades.map(mapGradeObject);

console.log(mappedGrades)

document.getElementById('grades').innerHTML = mappedGrades.join("");

/* expected output: 
Course name: Excel, Teacher name: amit, Grade: no grade

Course name: Programming, Teacher name: Yaakov, Grade: 100

Course name: DSS, Teacher name: Betty, Grade: 100
*/
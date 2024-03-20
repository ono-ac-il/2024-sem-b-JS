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
// primitive types
var myStr = "str";
console.log(typeof myStr); // string

var myNumber = 3;
console.log(typeof myNumber); // number

var myBoolean = false;
console.log(typeof myBoolean); // boolean

// function type
function myFunction() { }

// Complex types
var myDate = new Date();
var myArray = [];
var myObj = {};


console.log(
    'typeof myDate:', typeof myDate,
    'typeof myArray:', typeof myArray,
    'typeof myObj:', typeof myObj);

var arratyLikeObject = {
    0: "aa",
    1: "fg"
}

var myObj2 = {
    name: "Yaakov",
    age: 38,
    numKids: 5,
    married: true
};

// dot notation
myObj2.age = 38;

// Bracket notation
myObj2["age"] = 38;

var myObj3 = {
    key1: 1,
    key1: 3,
    key1: 6,
}
console.log(myObj3);

// dot notation
myObj3.key1 = 20;
myObj3.key2 = 30;

// Bracket notation
myObj3["key1"] = 50;
myObj3["key3"] = 80;

console.log(myObj3);

// branches (address, manager, numOfClass), classes, 20-40 students in class
var branch1 = {
    address: "asd",
    manager: "adssad",
    numOfClass: 4
}
var branch2 = {
    address: "asd",
    manager: "adssad",
    numOfClass: 4
}


var college = {
    branches: [branch1, branch2]
};

console.log(college)
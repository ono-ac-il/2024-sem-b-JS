// forEach, map, filter, find
// reduce, some, every, sort, reverse

var arr = [1, 2, 3, 4, 5];


// forEach
function printArrayElement(el) {
    console.log(el % 2 == 0)
}

arr.forEach(printArrayElement);


// filter, find
function checkIfbiggerThenTwo(el) {
    return el > 2;
}
console.log(arr.filter(checkIfbiggerThenTwo));
console.log(arr.find(checkIfbiggerThenTwo));


// map
var namesArr = ['john', 'jane', 'jack', 'jill', 'james', 'jenny'];


function upperCaseName(name, i) {
    console.log(name, i);
    return name.toUpperCase();
}

console.log(namesArr.map(upperCaseName));


// reverse
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2.reverse());
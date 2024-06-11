const numbers = [1, 2, 3, 4, 5];

/*
    [source array] -> f(n) -> [mapped array]

    // map letter to numer, a=1, b=2, c=3, etc...

    ['a', 'b', 'c', 'd'] -> f(n)
        --> f('a') [1]
        --> f('b') [1, 2]
        --> f('c') [1, 2, 3]
        --> f('d') [1, 2, 3, 4]

    result: [1, 2, 3, 4]

*/
// Given an array of numbers, return a new array with each number squared.
function power2(n) {
    return Math.pow(n, 2);
}

const newArray = numbers.map(power2);
console.log(numbers);
console.log(newArray);

// Given an array of numbers, return a new array of booleans indicating whether each number is even.
function isEven(n) {
    return n % 2 == 0;
}

const newArray2 = numbers.map(isEven);
console.log(numbers);
console.log(newArray2);

// Given an array of numbers, return a new array with each string wrapped in <li> tags.
function makeHTML(n) {
    return '<li>' + n + '</li>';
}

const newArray3 = numbers.map(makeHTML);
console.log(numbers);
console.log(newArray3);


// Given an array of objects with 'firstName' and 'lastName' properties, return a new array with full names.
const people = [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Smith' }];

function getFullName(p) {
    return p.firstName + " " + p.lastName;
}
console.log(people[0]);
console.log(getFullName(people[0]));

const peopleMapped = people.map(getFullName);
console.log(peopleMapped);
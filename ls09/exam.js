const myNum = 5;

const MAX_STUDENTS_IN_CLASS = 10;


const myStr = "The number is: " + myNum;

const myStr2 = `The number is: ${myNum}`;

console.log('myStr', myStr);
console.log('myStr2', myStr2);


const x = 5;
const y = 10;
const result1 = x + " + " + y + " = " + (x + y);
const result2 = `${x} + ${y} = ${x + y}`;
console.log(result1);
console.log(result2);

function divide(x, y) {
    // בדיקת תקינות הקלט
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw Error("Numbers input only");
    }

    // בדיקת תקינות לוגית
    if (y === 0) {
        throw Error("Divide by zero");
    }
    return x / y;

}

divide(1, 2);
// divide(1, 0);


class Vehicle {
    constructor(vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
        this.services = [];
        this.totalPrice = 0;
    }

    addService(service) {
        this.services.push(service);
        this.totalPrice += 100;
    }
}

let vehicles = [];
function addVehicle() {
    let vehicleNumber = document.getElementById('a').value;
    let selectedServicesElements = document.getElementById('b').selectedOptions;
    let selectedServices = []

    const v = new Vehicle(vehicleNumber);

    for (let i = 0; selectedServices.length; i++) {
        v.addService(selectedServices[i]);
    }
    vehicles.push(v);

}




/*
class Kid {
    constructor(motherName) {
        this.kidName = "בן של " + motherName;
    }
}
*/
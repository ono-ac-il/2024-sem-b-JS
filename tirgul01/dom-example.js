class Car {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
        this.licensePlate = '';
    }

    print() {
        return `Car details: year - ${this.year}, model - ${this.model}, color - ${this.color}`;
    }
}

const car1 = new Car("red", "X", 2024);
const car2 = new Car("black", "Y", 2023);
const car3 = new Car("White", "Y", 2022);

const cars = [car1, car2, car3];

function carToHTML(c) {
    return `<div>Car details: ${c.model} | ${c.year} | ${c.color}.</div>`
}

document.getElementById('car-list').innerHTML = cars.map(carToHTML); //.join("");
/*
const newArr = [];
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    let carHTML = carToHTML(car);
    newArr.push(carHTML);
}

document.getElementById('car-list').innerHTML = newArr;*/
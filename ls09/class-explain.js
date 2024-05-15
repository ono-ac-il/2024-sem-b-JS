// Defined way:
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}
const car1 = new Car('Toyota', 'Camry', 2023);
const car2 = new Car('Tesla', 'Model 3', 2024);

const cars = [car1, car2];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].describe());
}

// Anonymous way:
const _car1 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    describe: function () {
        return `Make: Toyota, Model: Camry, Year: ${2023}`;
    }
}

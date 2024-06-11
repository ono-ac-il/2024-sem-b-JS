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

function filterCar(c) {
    return c.year < 2024;
}

const filteredCars = cars.filter(filterCar);
console.log(filteredCars);
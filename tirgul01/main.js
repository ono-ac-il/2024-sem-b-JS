class Car {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
        this.licensePlate = '';
    }

    changeColor(color) {
        this.color = color;
    }

    print() {
        return `Car details: year - ${this.year}, model - ${this.model}, color - ${this.color}`;
    }
}

const car1 = new Car("red", "X", 2024);
const car2 = new Car("black", "Y", 2023);
car1.changeColor("White");

console.log(car1.print())
// ----------------------------------

const cars = [car1, car2];

for (let i = 0; i < cars.length; i++) {
    console.log('car' + i, cars[i]);
}



// backticks
const var1 = 5;
const var2 = 10;
const str1 = "Number one: " + var1 + ", number two: " + var2;

const str2 = `Number one: ${var1}, number two: ${var2}`;
console.log(str1);
console.log(str2);
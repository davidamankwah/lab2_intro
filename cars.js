class Vehicle { //defined class
    //initialise data
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    Information() {
        // logs make model and year to the console
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year:  ${this.year}`);
    }
}

//create object with added arguments
let myVehicle = new Vehicle('W', 'Golf', 2000);

myVehicle.Information();
console.log(myVehicle.Information());

//child extends parent class
class Car extends Vehicle {
    //four arguments
    constructor(make, model, year, doors) {
        super(make, model, year); //refers to Vehicle
        this.doors = doors; // add door 
    }

    Information() {
        super.Information(); // refers to the same data in Vehicle 
        console.log(`Doors: ${this.doors}`); //log doors to the console
    }

}

s
let myCar = new Car("W", "Golf", 2000, 5); //object with arguement
myCar.Information(); //call method

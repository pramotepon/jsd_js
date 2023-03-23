// Create Class Car
class Car {
  // Constructor method parameter(make,model,year)
  constructor(make, model, year) {
    // cons make = params make
    this.make = make;
    // cons model = params model
    this.model = model;
    // cons year = params year
    this.year = year;
    // cons speed = 0
    this.speed = 0;
  }
  // Instance Method drive
  drive(speed) {
    // Resign speed + params speed
    this.speed += speed;
    // show output
    console.log(`${this.make} speed: ${this.speed}`);
  }
  // Static method
  static listOfcars() {
    // Variable carMake = ("Benz", "Toyota", "Honda")
    const carMake = ["Benz", "Toyota", "Honda"];
    // return carMake
    return carMake;
  }
}
// Create a new car instance to myCar argrument (name, model, year)
let myCar = new Car("Benz", "E220", 2000);
// Call method drive
myCar.drive(230); // Benz speed: 230
// Call method listOfcars by instance variable
console.log(myCar.listOfcars); // undefined
// Call method listOfcars by static class
console.log(Car.listOfcars()); // [ 'Benz', 'Toyota', 'Honda' ]
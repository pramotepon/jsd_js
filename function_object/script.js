/*
Properties      Method
make: Benz      drive
model: E220     accelerate
year: 2004
*/
let myCar = {
    make: 'Benz',
    model: 'E220',
    year: 2004,
    drive: function(){
        console.log('Driving car');
    }
};
console.log(myCar);
// dot nocation
console.log(myCar.make);
// squre backet
console.log(myCar['make']);
// Change value
myCar.year = 2000;
console.log(myCar.year);

// Factory function
// Constructor function start with Capital
function NewCar(make, model) {
    return{
        make,model,drive(){
            console.log(drive);
        }
    };
}
// Create new Object to firstCar
const firstCar = new NewCar('BMW', 900);
console.log(firstCar); // { make: 'BMW', model: 900, drive: [Function: drive] }
// Create new Object to secondCar
const secondCar = new NewCar('Toyota', 1530);
console.log(secondCar); // { make: 'Toyota', model: 1530, drive: [Function: drive] }

// Object Construct
// Create variable Object name 
let ThisCar = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(name){
        console.log(`${name} is driving car`);
    };
};

let thirdCar = new ThisCar('Nisan', 'A123', 2003); 
console.log(thirdCar);
thirdCar.drive('Jack'); // Jack is driving car

let forthCar = new ThisCar('Nisan4', 'A1234', 2004); 
console.log(forthCar);
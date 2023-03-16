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
function newCar(make, model) {
    return{
        make,model,drive(){
            console.log(drive);
        }
    };
}
// Create new Object to firstCar
const firstCar = new newCar('BMW', 900);
console.log(firstCar); // { make: 'BMW', model: 900, drive: [Function: drive] }
// Create new Object to secondCar
const secondCar = new newCar('Toyota', 1530);
console.log(secondCar); // { make: 'Toyota', model: 1530, drive: [Function: drive] }

// Object Construct
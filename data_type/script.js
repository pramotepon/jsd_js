// console.log('Hello World!');
// let email = 'pramote.p.on@gmail.com';
// console.log(email);

/* 
    String 
*/
let firstName = "Pramote";
let lastName = "Phanon";
let fullName = firstName + ' ' + lastName;
console.log(fullName);
let info = `My name is ${fullName} and I an ${firstName}`;
console.log(info);
console.log(fullName.length);
console.log(fullName.toLocaleUpperCase());

/* 
    Booleans
*/
// == Value, === Value and Datatype
let email = 'pramote.p.on@gmail.com';
let findLetter = email.includes('@');
console.log(findLetter);

/* 
    Numbers
*/
let radius = 10;
const pi = 3.14;
console.log(radius, pi);
console.log(10/2);
let result = radius % 3;
console.log(result);
// Order B() I** D/ M* A+ S-
let bidMas = 5 * (10-3)**2;
console.log(bidMas);

// Undefined The value of a variable [default: undefined]
let isUndefined;
console.log(isUndefined);
// Null
let age = null;
console.log(age,age+3, `my age is ${age}`);
// Null and Undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

/* 
    Array
*/
// [] is name square basket
let selectedFruits = ['Apple', 'Banana', 'Orange'];
console.log(selectedFruits); // [Apple, Banana, Orange]
console.log(selectedFruits[1]); // Banana
selectedFruits[3] = 'Pineapple';
console.log(selectedFruits); // [Apple, Banana, Orange, Pineapple]
selectedFruits[1] = 'Mango';
console.log(selectedFruits); // [Apple, Mango, Orange, Pineapple]
console.log(selectedFruits.length); // 4

/* 
    Object
*/
let user = {
    firstName: 'Pramote',
    lastName: 'Phanon',
    email: 'pramote.p.on@gmail.com',
    age: 28,
    location: 'Bangkok',
    readingList:['HTML', 'CSS', 'JavaScript'],
}
console.log(user); // Object List user
console.log(user.email); // pramote.p.on@gmail.com
console.log(user.age); // 28
user.age = 29;
console.log(user.age); // 29



// Create function run
function run(){
    var fruit = "banana"; // Variable var
    let food = "noodle"; // Variable let

    console.log(fruit, food); // Show fruit and food
    // Scope
    {
        var moo = "Mooo"; // Variable var in scope
        let honey = "bee"; // Variable let in scope
        console.log(moo, honey); // Show moo and honey
    }
    console.log(moo); // Show moo 
    console.log(honey); // Show honey Error not defined

    const myConst = 0.5; // Variable const
    console.log(myConst); // show myConst
    myConst = 1; // Change value to 1
    console.log(myConst); // show myConst Error 
}

// Call Functiom run
// run();
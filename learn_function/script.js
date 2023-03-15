// Declaration Function
function info(name){
    console.log('Hello '+name);
}
info('Declaration');

// Expression Function
const myInfo = function (name) {
    console.log('Hello '+name);
}
myInfo('Expression');

// Hoisting Declaration Can Hoisting
hoistinfo('Hoisting Declaration');
function hoistinfo(name){
    console.log('Hello '+name);
}

// Hoisting Expression Can't Hoisting
// hoistMyInfo('Hoisting Expression');
// const hoistMyInfo = function (name) {
//     console.log('Hello '+name);
// }

// Arrow function 
// Function have parameters
const concString = name => {
    return `Hello ${name}`;
}
// Call function have argument
console.log(concString("Marco"));

// No Parameter
const noParam = () => console.log('No Parameter');;
noParam();

// Multi Parameters
const concStringMultiParams = (name, age) => {
    return `Hello ${name}. I'am ${age} year old.`;
}
console.log(concStringMultiParams('Marco',27));

// Simplify for single parameter
const mySimplify = name => console.log(name);
mySimplify("Arrow Marco");

// Function used as values
const myFunction = (a,b) => a*b;
let x = myFunction(5,3);
let y = x;
console.log(y);

// Function Scope 3 types Block Scope, Function Scope, Global Scope
let a = 1;
function justResign(){
    a = 2;
    console.log(a);
}
justResign();
console.log(a);
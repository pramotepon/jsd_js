/* 
    forEach
*/
// Variable numbers type Array
const numbers = [1,2,3,4,5];
// numbers loop insert data to number
numbers.forEach(number => {
    console.log(number);
});
// numbers loop insert data to number
numbers.forEach((item, index) => {
    console.log(index, item);
});

const letters = ['a','b','c','d','a','c','a'];
let count = {}; // Create Variable count type Object
console.log(typeof count);
letters.forEach(item => {
    if (count[item]) { // check if have an letter
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);
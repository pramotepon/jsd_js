/* 
    forEach
*/
// Variable numbers type Array
const numbers = [1, 2, 3, 4, 5];
// numbers loop insert data to number
numbers.forEach(number => {
    console.log(number); // 1 2 3 4 5
});
// numbers loop insert data to item and index of array
numbers.forEach((item, index) => {
    console.log(index, item); // 0 1  1 2  2 3  3 4  4 5
});

const letters = ['a', 'b', 'c', 'd', 'a', 'c', 'a'];
let count = {}; // Create Variable count type Object
console.log(typeof count); // object
letters.forEach(item => {
    if (count[item]) { // check if have an letter
        count[item]++; // value in object +1
    } else { // else
        count[item] = 1; // set value in object = 1
    }
});
console.log(count);

/* 
    map
*/
// storeUSD type Array
let storeUSD = [5, 6, 7, 8];
// storeUSD.map return value to variabel storeEUR
let storeEUR = storeUSD.map(value => value *= 0.85);
console.log(storeEUR); // [ 4.25, 5.1, 5.95, 6.8 ]

function toEuros(value) {
    value *= 0.85;
    return value;
}
let funcStoreEUR = storeUSD.map(toEuros);
console.log(funcStoreEUR); // [ 4.25, 5.1, 5.95, 6.8 ]

/* 
    Filter
*/
const filtered = numbers.filter(n => n >= 3);
console.log(filtered); // [ 3, 4, 5 ]

/* 
    indexOf
*/
const lessNumber = numbers.findIndex(num => {
    return num < 10;
});
console.log(lessNumber); // 0

/* 
    Reduce
*/
// Accumulator is start value CurrentValue is End value 1 + 2... +5
const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);
console.log(sum); // 15
// Can set Initial Value to Accumulator 10 + 1 + 2 ... +5
const sumInitialValue = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue, 10);
console.log(sumInitialValue); // 25
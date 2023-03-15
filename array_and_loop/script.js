// Const array numbers
const numbers = [3,4];
console.log(numbers); // [3,4]

// Method push
numbers.push(5,6);
console.log(numbers); // [3,4,5,6]

// Method unshift
numbers.unshift(1,2);
console.log(numbers); // [1,2,3,4,5,6]

// add choose position start index 2, don't delete 0, data 'a', data 'b'
numbers.splice(2,0,'a','b');
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]

// remove last data in array
const last = numbers.pop();
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5]
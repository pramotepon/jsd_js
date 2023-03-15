// Const array numbers
const numbers = [3,4];
console.log(numbers); // [3,4]

// Method push add data to last data in array
numbers.push(5,6);
console.log(numbers); // [3,4,5,6]

// Method unshift 
numbers.unshift(1,2);
console.log(numbers); // [1,2,3,4,5,6]

// add choose position start index 2, don't delete 0, data 'a', data 'b'
numbers.splice(2,0,'a','b');
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]

// remove last data in array
const removeLast = numbers.pop();
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5]
// arr.pop return remove value
console.log(removeLast); // 6

// remove first data in array
const removeFirst = numbers.shift();
console.log(numbers); // [2, 'a', 'b', 3, 4, 5]
console.log(removeFirst); // 1
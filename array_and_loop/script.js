// Const array numbers
let numbers = [3, 4];
console.log(numbers); // [3,4]

// Method push add data to last data in array
numbers.push(5, 6);
console.log(numbers); // [3,4,5,6]

// Method unshift
numbers.unshift(1, 2);
console.log(numbers); // [1,2,3,4,5,6]

// add choose position start index 2, don't delete 0, data 'a', data 'b'
numbers.splice(2, 0, "a", "b");
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

// remove choose index for remove
const removeMiddle = numbers.splice(1, 2);
console.log(numbers); // [2, 3, 4, 5]
console.log(removeMiddle); // ['a', 'b']

// Empty Array case
numbers.length = 0;
console.log(numbers); // []
// 
numbers.push(2, 3, 4, 5, 4);
// 
// Search index in array data 4
console.log(numbers.indexOf(4)); // 2
console.log(numbers.lastIndexOf(4)); // 4
console.log(numbers.indexOf(4,3)); // 4

// Concat array
const firstConc = [1,2,3];
const secondConc = [4,5,6];
// Concat firstConc and secondConc
const combined = secondConc.concat(firstConc);
console.log(combined); // [4, 5, 6, 1, 2, 3]
// Concat firstConc and secondConc
const combinedTwo =[...firstConc,...secondConc];
console.log(combinedTwo); // [1, 2, 3, 4, 5, 6]
// Slice array
const sliceFirst = combined.slice(2,4);
console.log(sliceFirst); // [3, 4]

// Reverse data in array
console.log(combined.reverse());


// JavaScript Array Methods 

let fruits = ['Banana', 'Apple', 'Orange']
let newFruit = ['Grape'];

// sorting elements in the alphabetical order
fruits.sort();
console.log(fruits); 

//finding the index position of string
const position = fruits.indexOf('Apple');
console.log(position); 

// slicing the array elements
const newDailyFruits = fruits.slice(1);
console.log(newDailyFruits); 

// concatenating two arrays
const routine = fruits.concat(newFruit);
console.log(routine); 
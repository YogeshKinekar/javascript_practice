//1. Print the length of the Character.

let name = "Yogesh";
console.log(name.length);





//2. With template literals, it's a bit easier to include variables and expressions inside a string. For that, we use the ${...} syntax.

const name = 'Jack';
console.log(`Hello ${name}`); 

const result = 4 + 5;

// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);

console.log(`${result < 10 ? 'Too low': 'Very high'}`)

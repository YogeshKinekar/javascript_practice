// Ternary Operator Used Instead of if...else 

// check the age to determine the eligibility to vote
let age = 25;
let result;

if (age >= 18) {
      result = "You are eligible to drive.";
} else {
      result = "You are not eligible to drive yet.";
}

console.log(result);

// ternary operator to check the eligibility to vote
let age1 = 24;
let result1 =
    (age1 >= 18) ? "You are eligible to drive" : "You are not eligible to drive yet";
console.log(result1);
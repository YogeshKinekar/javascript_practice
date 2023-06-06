// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);




// Write a function that returns the factorial of a number. As a quick refresher,
// a factorial of a number is the result of that number multiplied by the number before it, 
// and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(num){
  let result = 1;
  for (let i = num; i>0; i--){
    result *= i;
  }
  return result;
}
console.log(factorial(5));

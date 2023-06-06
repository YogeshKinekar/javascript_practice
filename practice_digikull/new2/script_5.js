// program to find the LCM of two integers

// take input
const num1 = 6;
const num2 = 8;

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}




// Find the Prime numbers from the given array and return the array of prime numbers 
// in the console if no prime number in the array return the empty array.

const arr = [4,5,8,6,9,7,12];
function isPrime(num) {
  for(let i=2; num>i; i++){
    if(num % i ===0){
      return false;
    }
  }
  return num > 1;
}
console.log(arr.filter(isPrime));

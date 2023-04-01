// The loop in this example uses a while loop to collect the car names from the cars array


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}  
console.log(cars + " ");
// Extract the amount out of the string "Please give Rs1000" .

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);
// Template literals 

let boy1 = "Promod";
let boy2 = "Nikhil";

let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);




// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}

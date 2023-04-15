//   2.change uppercase of staring alphabet of every word in given string 
const str = 'Take your developing career to the next level';

const arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join(" ");
console.log(str2);





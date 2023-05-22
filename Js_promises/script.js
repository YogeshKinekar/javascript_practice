// Program with a promise 

const makeAPromise = true;

let countValue = new Promise(function (resolve, reject) {
    if (makeAPromise) {
        resolve("There is a truthy");
    } else {
        reject("There is falsy");
    }
});

console.log(countValue);



// JavaScript finally() method
// You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.


// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);

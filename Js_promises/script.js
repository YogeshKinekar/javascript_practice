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
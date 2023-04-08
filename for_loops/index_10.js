// Write a JS code to find the power of a number using for loop

function numPower(num,pow) {
    let res = 1
    for(let i=0; i<pow; i++){
        res =res * num;
    }
    return res;
}
console.log(numPower(4,3));
console.log(numPower(68,2));
console.log(numPower(54,4));
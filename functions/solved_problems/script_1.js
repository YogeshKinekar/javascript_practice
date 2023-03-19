// using previous parameter in default value expression

let calculate = function(x = 15, y = x + 2) {
    return x + y;
}

const result1 = calculate(10);
console.log(result1);

const result2 = calculate();
console.log(result2);
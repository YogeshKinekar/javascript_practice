const employees = [
    { name: "Luck", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Nak", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fab", salary: 1500, bonus: 500, tax: 200 },
    { name: "Ali", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
console.log(newArr);
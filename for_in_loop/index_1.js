const salaries = {
    Jack : 26000,
    Mack : 37000,
    Marie : 58000
}
// using for...in 
for ( let i in salaries) {
    let salary = "$" + salaries[i];
    console.log(`${i} : ${salary}`);
}
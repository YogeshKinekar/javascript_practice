// Filter function    Practice Problem 

let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arr.filter((x)=>{
    return x%10 == 0
})
console.log(n);
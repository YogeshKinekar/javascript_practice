// 1. write a program using prompt function to take input of age as a value from the user and use a text to tell him if he can drive ? 
// let age = prompt("Enter your age")
// age = Number.parseInt(age)

// const canDrive = (age)=>{
//     age>=18?true:false
// }
// if(canDrive(age)){
//     alert("Yes you can drive")
// }
// else{
//     alert("You cannot drive")
// }


// 2.Use of confirm to see the prompt again
// let runAgain = true;
// const canDrive = (age)=>{
//     return age >= 18 ? true : false
// }
// while (runAgain){
//     let age = prompt("Enter your age ")
//     age = Number.parseInt(age)

//     if(canDrive(age)){
//         alert("Yes you can drive")
//     }
//     else{
//         alert("You cannot drive")
//     }
// }


// 3. use console error to log the error if the age entered is negative

// let runAgain = true;
// const canDrive = (age)=>{
//     return age >= 18 ? true : false
// }
// while (runAgain){
//     let age = prompt("Enter your age ")
//     age = Number.parseInt(age)
//     if(age<0){
//         console.error("Please enter a valid age")
//         break;
//     }

//     if(canDrive(age)){
//         alert("Yes you can drive")
//     }
//     else{
//         alert("You cannot drive")
//     }
// }


// 4.Write a program to change the url to google.com if user enters a number greater than 4


let number = prompt("Enter your number")
number = Number.parseInt(number)

if (number > 4) {
  location.href = "https://google.com"
}
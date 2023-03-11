//  write a program using prompt function to take input of age as a value from the user and use a text to tell him if he can drive ? 
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

let runAgain = true;
const canDrive = (age)=>{
    return age >= 18 ? true : false
}
while (runAgain){
    let age = prompt("Enter your age ")
    age = Number.parseInt(age)

    if(canDrive(age)){
        alert("Yes you can drive")
    }
    else{
        alert("You cannot drive")
    }
}

// Attaching multiple handlers to a promise 


let p1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(1);
    },2000)
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})
p1.then(()=>{
    console.log("hey")
})
p1.then(()=>{
    console.log("Now promise is resolved successfully")
})
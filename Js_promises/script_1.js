// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 })
 
 // executes when promise is resolved successfully
 .then((result)=>{
    console.log(result)
 })
  
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 )
 .then((result)=>{
    
    console.log("this is now resolved");
 })
 .catch((result)=>{
    console.log("result");
 });
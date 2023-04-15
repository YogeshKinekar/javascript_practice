let promise = new Promise(function(resolve, reject){
  const error= true;
  reject();
  }).then(result =>{
   console.log(`Number is ${result}.`);
  }).catch(error =>{
    console.error("Boo!");
  });


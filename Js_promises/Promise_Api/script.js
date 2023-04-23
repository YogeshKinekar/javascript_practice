let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },1000)
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000)
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },1000)
});

let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((value)=>{
    console.log(value);
})
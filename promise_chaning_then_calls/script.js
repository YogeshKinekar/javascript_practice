// let p1 = new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//      console.log("Resolved after 2 second")
//      resolve(56)
//      },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//         resolve("Promise 2")
//     })
//     return p2

// }).then((value)=>{
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
//     return 2
// }).then((value)=>{
//     console.log("It is now really done")
// })



const loadScript = (src) => {
    return new Promise((resolve, reject)=>{
      let script = document.createElement("script") 
      script.type = "text/javascript"
      script.src = src
      document.body.appendChild(script)
      script.onload = () => {
        resolve("script has been loaded sir")
      }
      script.onerror = () => (reject(0))
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
}).then((value) =>{
    console.log("Second script ready")
}).catch((error)=>{
  console.log("We are sorry but we are having problems loading this script")
})
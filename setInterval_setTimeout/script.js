document.write("Hello")

let a = setTimeout(function() {
    alert("I am inside of settimeout")
},5000)
let b = prompt("Do you want to run the settimeout?")
if("n" == b) {
    clearTimeout(a)
}
console.log(a)
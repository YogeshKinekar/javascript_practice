// Write a program to print the marks of a student in an object using for loop.

let marks = {
   yogi: 80,
   lovish: 45,
   mona: 46,
   sita:16
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i] + " " + marks[Object.keys(marks)[i]]);
}






 
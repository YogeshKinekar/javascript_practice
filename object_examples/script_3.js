// Write a JavaScript program to delete the roll no property from the following object. Also print the object before or after deleting the property

let student = {
    name : "Harsh",
    rollno : 125,
    color : "Blue",
    gender : "Male"
}

console.log(student);
delete student.rollno;
console.log(student);
// An array is a special variable, which can hold more than one value:

// const cars = ["Saab", "Volvo", "BMW"];
// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.




let marks_class_12 =[81, 92, 73, 64, 75, 86] 
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks-class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)

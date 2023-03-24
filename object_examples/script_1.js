// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [4, 5, 6];

// object to add
let object = {x: 14, y: 6};

// call the function
insertObject(array, object);
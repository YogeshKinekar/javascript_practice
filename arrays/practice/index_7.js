


// 1.Write a JS code to delete all occurrence of element in given array 
let removeElement = (array, n) => {
    let newArray = [];
   
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== n) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
   
  let array = [2,1,5,6,9,3,8,6,9,7,10];
  let element = 9;
  let result = removeElement(array, element);
   
  console.log(result);



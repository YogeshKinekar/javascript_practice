// Remove the duplicate from the array

// Example

// Input arr = [1,2,2,43,44,5,3,3,1,1,1,3,4,54,"4","1", "a", "b", "c" ]

// output : [
//   '1', 2,  3,  4,   5,
//   43,  44, 54, 'a', 'b',
//   'c'
// ] 



function removeDuplicate(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
      let flag = true;
  
      for (let j = 0; j < result.length; j++){
        if(arr[i] == result[j]){
          flag = false;
          break;
        }
      }
      if(flag){
        result.push(arr[i]);
      }
    }
    return result.sort(); 
  } 
  console.log(removeDuplicate([1,2,2,43,44,5,3,3,1,1,1,3,4,54,"4","1", "a", "b", "c" ]
  ))
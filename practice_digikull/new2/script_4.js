// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2



function searchInsert(arr, target){
    for(let i=0; i< arr.length; i++){
      if(arr[i] == target){
        return i;
      }
    }
    return arr.length;
  }
  console.log(searchInsert([1,3,5,6],5));




// Given an array of size N-1, it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input: N = 5 , Arr = [1,2,3,5]

function findMissing(arr,N){
    let i;
    let temp = [];
    for (i = 0; i <= N; i++) {
              temp[i] = 0;
          }
   
          for (i = 0; i < N; i++) {
              temp[arr[i] - 1] = 1;
          }
   
          let ans = 0;
          for (i = 0; i <= N; i++) {
              if (temp[i] == 0)
                  ans = i + 1;
          }
          console.log(ans);
  }
   
  
          let arr = [ 1, 2, 3, 5 ];
          let n = arr.length;
   
          
         findMissing(arr,n);

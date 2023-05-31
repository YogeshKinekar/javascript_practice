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
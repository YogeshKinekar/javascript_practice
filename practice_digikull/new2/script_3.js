// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

//      Input: nums = [1,2,3,3]
//      Output: 3


function repeatedNTimes (s) {
    //Write your code here  
     let result = [];
       for(let i = 0; i < s.length; i++){
         if(!result.includes(s[i])){
           result.push(s[i]);
         } else{
           return s[i];
         }
       }
    };
    console.log(repeatedNTimes([1,2,3,3]))
    module.exports = {repeatedNTimes};
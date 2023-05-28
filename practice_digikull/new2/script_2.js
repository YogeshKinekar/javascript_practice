// find the second largest element from the array by using Bubble sort

// example 

// input : arr = [1,0,9,6,8,3,10]

// Output : 9

function bubble_sort (arr) {
    //Write your code here  
       for (let i = 0; i < arr.length; i++){
         let flag = true;
         for(let j = 0; j < arr.length -1; j++){
         if(arr[j] > arr[j+1]){
           flag = false;
           let temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp;
         }
       }
       if(flag){
         break;
       }
     }
    return arr[arr.length -2];
    };
    console.log(bubble_sort([1,0,9,6,8,3,10]))
    module.exports = {bubble_sort};




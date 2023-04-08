// Write a JS code to delete all occurrence of element in given array

function deleteElement(arr,ele) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]==ele){
            arr.splice(i,1)
        }
    }
    return arr
}
let arr = [23,56,4,78,5,63,45,210,56];
 arr = deleteElement(arr,78);
 console.log(arr);
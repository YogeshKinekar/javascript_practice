// Write a function to reverse an array then multiple each element with 2 

const rev =(value)=> {
    let rev_arr = value.reverse();
    let multiple_arr = rev_arr.map((ele)=>{
        return ele * 2;
    });
    return multiple_arr;
};
let arr_rev = [1,2,3,4,5,6];
console.log(rev(arr_rev));
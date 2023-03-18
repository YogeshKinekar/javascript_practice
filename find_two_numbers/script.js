let a = [1,21,3,14,5,60,7,6]
value = 81
function findSum(a,value){
  for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
      if(a[i]+a[j] === value){
        return [a[i],a[j]]
      }
    }
  }
  return zero
}
console.log(findSum(a,value))
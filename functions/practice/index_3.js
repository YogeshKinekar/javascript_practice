// Write a JavaScript function that reverse a number






  function reverseNumber(num) {
    let reverse = 0;
    while(num !=0)
    {
        reverse = reverse *10;
        reverse = reverse + num % 10;
        num = Math.floor(num/10);
    }
    return reverse;
  }
  console.log(reverseNumber(56894));



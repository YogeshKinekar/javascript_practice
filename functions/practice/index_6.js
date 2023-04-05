// Write a function to find the area and perimeter of a Circle 

function circleValues(rad) {
    return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
  }
  
  console.log(circleValues(8)) ;
  console.log(circleValues(12));
  console.log(circleValues(24));
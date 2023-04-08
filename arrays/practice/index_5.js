// We will consider an example of a to-do list which can be represented as an array of each item object with properties of the item name, price, quantity, isChecked, and brand details.

let todoList = [ 

    {item_name:"Apple", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
    
    {item_name:"Bannana", price:"$3", quantity:2, brand_details: {name:"Fuji", location:"San Diego"}, isChecked:false},
    
    {item_name:"Pears", price:"$7", quantity:4, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
                             
    {item_name:"Milk", price:"$4", quantity:3, brand_details: {name:"Mother Dairy", location:"California"}, isChecked:false},
                           
    ];

    // In the below example, item_name, price, and quantity object properties are accessed and logged for every object in an array of objects using Array.map()

    // Print item_name, price and quantity of each object in todo list 

todoList.map(({item_name, price, quantity})=>{ 

    console.log(`${item_name} with quantity ${quantity} with price ${price}`)
  
  });
  
 
  
  // Print item_name and brand name of all checked object 
  
  todoList.map(({item_name, isChecked, brand_details: {name}})=>{ 
  
  if(isChecked){
  
    console.log(`${item_name} from ${name} is selected`); 
  
  }
  
  });
  
  
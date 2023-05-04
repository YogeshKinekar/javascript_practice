// 1-  Use the .map() method on the heros array to return a new array.
// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// // The key 'id' should be based on the index.



// Example  :-
//               Input:  heroes = [
//                                { name: 'SpiderMan},
//                                { name: 'Thor' },
//                                { name: 'BlackPanther' },
//                                { name: 'Captain Marvel' },
//                                { name: 'Silver Surfer' }
//                                                   ]
//              Output : [
//                              { id: 0, hero: 'Spider-Man' },
//                              { id: 1, hero: 'Thor' }, 
//                              { id: 2, hero: 'Black Panther }, 
//                              { id: 3, hero: 'Captain Marvel' }, 
//                              { id: 4, hero: 'Silver Surfer' }
//                            ]




1.
var heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];

var arr = heros.map((hero, index) =>{
  return {id:index, hero:hero.name}
});

console.log(arr);



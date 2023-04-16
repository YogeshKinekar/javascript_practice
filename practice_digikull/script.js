


let input = document.getElementById("inp");
let btn = document.getElementById("btn");

let div= document.getElementById("get");


function addTodo(){
let todo = document.createElement('div');
todo.innerText = inp.value;
div.appendChild(todo);
 
}

btn.onclick = addTodo;
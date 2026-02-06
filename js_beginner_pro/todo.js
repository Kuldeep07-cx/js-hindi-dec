
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click",addTodo);
 
function addTodo(){
    const task = todoInput.value.trim();

    if(task === ""){
        alert("please enter a task");
        return;
    }


const li = document.createElement("li");
li.innerText = task;

li.addEventListener("click",function(){
    li.classList.toggle("completed");
})

const deleteBtn = document.createElement("button")
deleteBtn.innerText= "X";
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click",function(e){
    e.stopPropagation();
    li.remove();

});

li.appendChild(deleteBtn);
todoList.appendChild(li);
todoInput.value="";


}
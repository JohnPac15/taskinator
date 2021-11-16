// var formEl = document.querySelector("#save-task");
// var taskToDoEl = document.querySelector("#tasks-to-do");


// var createTaskHandker = function() {

//     event.preventDefault();



//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "this is a new task. ";
//     taskToDoEl.appendChild(listItemEl);
    
// };
// formEl.addEventListener("submit", createTaskHandker);

var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);
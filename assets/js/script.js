var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandker = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task. ";
    taskToDoEl.appendChild(listItemEl);
};
buttonEl.addEventListener("click", createTaskHandker);


// var buttonEl = document.querySelector("#save-task"); 
// var tasksToDoEl = document.querySelector("#tasks-to-do"); 

// var createTaskHandler = function() { 
//   var listItemEl = document.createElement("li"); 
//   listItemEl.className = "task-item"; 
//   listItemEl.textContent = "This is a new task."; 
//   tasksToDoEl.appendChild(listItemEl); 
//   }; 

// buttonEl.addEventListener("click", createTaskHandler);

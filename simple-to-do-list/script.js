// Get DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Add the task text
    listItem.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add event listener to remove the task
    removeBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    // Append the remove button to the list item
    listItem.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
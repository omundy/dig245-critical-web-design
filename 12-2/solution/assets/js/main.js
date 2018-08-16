var todos = [];

var addTask = document.getElementById("addTask");
addTask.onsubmit = function(event) {
    event.preventDefault();
    var task = addTask.task.value;
    if (task) addItem(task);
    addTask.task.value = null;
};

/**
 * Adds the given task to the list of todos, then updates the list to reflect the changes.
 * Also alerts the user of the number of task every 5 tasks.
 * @param task: the new task
 */
function addItem(task) {
    // First, add the new task to the array
    todos.push(task);

    // Then, update the list
    updateList();

    // Finally, check to see if the number of tasks is a multiple of 5 and alert the user if so
    if (todos.length % 5 === 0) {
        alert("You now have " + todos.length + " tasks.")
    }
}

/**
 * Updates the HTML of the list to match the current state of todos.
 */
function updateList() {
    // Get a reference to the
    var list = document.getElementById("list");

    // Create a new string that we can build on
    var html = "";

    // Iterate over all todos
    for (var i = 0; i < todos.length; i++) {
        // Add each item to the string inside <li> tags
        html += "<li>" + todos[i] + "</li>"
    }

    // Set the content of the <ul> to our new string
    list.innerHTML = html;
}

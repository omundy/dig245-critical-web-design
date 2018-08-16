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
    // ADD CODE HERE
}

/**
 * Updates the HTML of the list to match the current state of todos.
 */
function updateList() {
    // ADD CODE HERE
}

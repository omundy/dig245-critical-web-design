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
    todos.push(task);
    updateList();
    if (todos.length % 5 === 0) {
        alert("You now have " + todos.length + " tasks.")
    }
}

/**
 * Updates the HTML of the list to match the current state of todos.
 */
function updateList() {
    var list = document.getElementById("list");
    list.innerHTML = todos.reduce(function (a, value) {
        return a + "<li>" + value + "</li>";
    }, "");
}

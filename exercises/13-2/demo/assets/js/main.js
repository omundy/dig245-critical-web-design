var todos = [];

$("#addTask").submit(function (event) {
    event.preventDefault();
    var input = $("input[name=task]");
    var task = input.val();
    if (task) addItem(task);
    input.val(null);
});

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
    var html = "";
    for (var i = 0; i < todos.length; i++) {
        html += "<li class='task'>" + todos[i] + "</li>"
    }
    list.innerHTML = html;
}

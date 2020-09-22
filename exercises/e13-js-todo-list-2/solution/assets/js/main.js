// Don't do anything until the document has loaded
$(document).ready(function () {
    var todos = [];
    // Create and array to keep track of which tasks have been completed
    var completed = [];

    $("#addTask").submit(function (event) {
        event.preventDefault();
        var input = $("input[name=task]");
        var task = input.val();
        if (task) addItem(task);
        input.val(null);
    });

    // When the clear button is clicked, reset both arrays and update the list
    $("#clear").click(function () {
            todos = [];
            completed = [];
            updateList();
        }
    );

    /**
     * Adds the given task to the list of todos, then updates the list to reflect the changes.
     * Also alerts the user of the number of task every 5 tasks.
     * @param task: the new task
     */
    function addItem(task) {
        todos.push(task);
        // When a task gets added, we mark it as incomplete
        completed.push(false);
        updateList();
        if (todos.length % 5 === 0) {
            alert("You now have " + todos.length + " tasks.");
        }
    }

    /**
     * Updates the HTML of the list to match the current state of todos.
     */
    function updateList() {
        var html = "";
        for (var i = 0; i < todos.length; i++) {
            html += "<li class='task" + (completed[i] ? " completed" : "") + "'>" + todos[i] + "</li>";
        }
        // Set the inner HTML of the list to the concatenated string
        $("#list").html(html);

        // When each task is clicked, we do something
        $(".task").click(function () {
            // Toggle the "completed" class on "this" task to change its appearance
            $(this).toggleClass("completed");

            // Find the index of this task in the list. Note that we can be confident this will
            // work as expected since there is only a single list in our site
            var index = $(".task").index(this);

            // Update the status of the task as either complete or incomplete
            completed[index] = !completed[index];
        });
    }
});

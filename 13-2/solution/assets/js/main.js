$(document).ready(function () {
    var todos = [];
    var completed = [];

    $("#addTask").submit(function (event) {
        event.preventDefault();
        var input = $("input[name=task]");
        var task = input.val();
        if (task) addItem(task);
        input.val(null);
    });

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
        completed.push(false);
        updateList();
        if (todos.length % 5 === 0) {
            alert("You now have " + todos.length + " tasks.")
        }
    }

    /**
     * Updates the HTML of the list to match the current state of todos.
     */
    function updateList() {
        $("#list").html(
            todos.reduce(function (a, value, i) {
                return a + "<li class='task " + (completed[i] ? "completed" : "") + "'>" + value + "</li>";
            }, "")
        );
        $(".task").click(function () {
            $(this).toggleClass("completed");
            var index = $(".task").index(this);
            completed[index] = !completed[index];
        });
    }
});
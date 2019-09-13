# Todo List - Part 1

In this demo, you will be making a very basic todo list. You will use arrays and the DOM to store the tasks, list them
on the screen, and add tasks to the list.

## Assignment

You have been provided with a skeleton of the todo list and will be finishing the JavaScript necessary to be able
to add items to the list. With a partner, complete the following tasks:

1. Download and unzip `demo.zip` to one partner's computer. Take some time to look over both `index.html` and `main.js`.
   Notice that `index.html` has a list with no items. The items will be added later by your JavaScript. In both
   `index.html` and `main.js`, you will notice both a `<form>` as well as some code that handles interaction from the form.
   You don't need to completely understand what all of this is doing. What's important to know is that when something is
   submitted to the form, the `addItem` function is called and whatever was typed into the input field gets passed as a
   parameter (in this case, `task`). You will be completing the `addItem` and `updateList` functions in this assignment.

2. First, you should implement `updateList`, since `addItem` relies on it. Essentially, you need to change the `innerHTML` of
   the `#list` element to contain a `<li>` for every task in `todos`. There are several ways to go about transforming
   `todos` into a properly formatted HTML String. We will use a `for` loop in combination with string concatenation.
   Iterate over all of the tasks, and for each one, add it to a string as a list item. Once you have a completed string
   of all the tasks in HTML form, you can put it inside the `<ul>`. It is wise to ensure `updateList` is
   working properly before moving on to the next step. You can test it by manually adding some items to `todos` and then
   placing a single call to `updateList` at the bottom of the file. Then, when you load the page, you should see the
   elements of `todos` listed on the screen.

3. Now that you have `updateList` working, it is time to complete `addItem`. Remember, this is the function that gets
   called every time the form is submitted. The function will have to add the new task to `todos`, then update the
   HTML list. Also, upon the addition of every 5th task, the user should get an alert that tells them the number of tasks
   currently in the list (JavaScript's `alert()` function will come in handy here). Once `addItem` is successfully
   completed, you should be able to add tasks to your heart's content! We will worry about removing them in Part 2!

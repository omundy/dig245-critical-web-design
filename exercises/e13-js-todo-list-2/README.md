# Todo List - Part 2

In this demo, you will be picking up where you left off in [Part 1](../12-2/README.md) by making the switch to jQuery
and adding a few more features.

## Assignment

Complete the following tasks with a partner:

1. Download and unzip `demo.zip` to one partner's computer. It contains a completed version of [Part 1](../12-2/README.md)
   as well as a few additions.

2. First, you are going to alter the existing code to take advantage of jQuery. No functionality of the app will change -
   just how it gets implemented. jQuery has already been imported for you in `index.html`, and the form handling now uses
   jQuery. Now, you should complete the following:

   * Use jQuery to ensure none of your code will run until the page has finished loading (Hint: `.ready()`).

   * You should no longer have `getElementById` or anything similar in your code. Instead, you should use jQuery
     selectors (`$`).

   * Use jQuery to set content on the page (Hint: `.html()`).

   If you do everything correctly, your todo list should now function exactly as it did before.

3. A "Clear List" button has been added to `index.html` for you. Make it clear the list when you click on it (and use
   jQuery of course).

4. It's great that we can add items to our list, but what if we want to mark them as completed? Your task is to enable
   the user to click on a task to mark it as complete or incomplete. There is a CSS class in `styles.css` called
   `completed` which will visually distinguish completed tasks. Using jQuery, you should toggle this class on a task if
   that task gets clicked on. **This is not an easy feature to implement.** Be patient, think outside the box, and don't
   give up.

   Some things to keep in mind:

   * You should be able to click on any task, even new ones that get added.

   * If you mark a task as completed, it should stay that way, even after a new task gets added.

   Some hints:

   * jQuery can be used to select groups of elements, not just individual ones.

   * JavaScript's **`this`** keyword will come in handy. You don't need to completely understand how it works, but
     know that in the context of this problem, it can be used to reference a member of a group.

   * You will need a way of keeping track of which tasks are completed.

5. Celebrate! You have completed a simple todo app and finished your introduction to JavaScript!

# Boxalicious

As you begin to learn JavaScript and some basic programming concepts, it is also important to investigate how they
relate to everything we have covered up until this point. JavaScript is called the "programming language
of the web" because it is used to interact with HTML and CSS, therefore making website more dynamic. This assignment
will begin to explore these connections.

## Assignment

Your task is to use HTML, CSS, and Javascript to create a box that follows your mouse movements in the browser. You are
provided with an `index.html` as a starting point. For simplicity's sake, all CSS and JavaScript will be written in
this file, even though this is generally bad practice.

Complete the following tasks with a partner:

1. Open `index.html` in the browser. You'll notice that there is a simple box in the top right corner. As of now,
   it doesn't do a whole lot, so you are going to make it a little more interesting. In the following steps,
   all of your JavaScript will go inside the empty `<script>` tags in `index.html`. 
   
2. Let's consider what needs to happen in order to complete this task. We want the box to follow the user's
   mouse, so we know that every time to mouse moves, the box's location will have to change. But how do we know when the
   mouse has moved? Luckily, JavaScript has a handy method called `addEventListener` which will listen for a specified
   event to occur, then execute some code when it does. Do some research on your own to figure out how properly use this
   method to the effect that we want (Hint: we are interested in when the `mousemove`s within the `document`). For now,
   code that this method executes can be left blank. Before you move onto the next step, be sure you can answer the
   following question: **What is the DOM and what is `document`?**
   
3. 


_This demo is based off an assignment from [John-Michael Murphy](https://github.com/john-michael-murphy)._
# Color

In this demo, you will be using JavaScript to change the background color of a website based on user interaction. The
finished site will have four buttons, each of which will change the color of the page to either red, green, blue, or
a random color.

## Assignment

Complete the following tasks with a partner:

1. Download and unzip `demo.zip` to one partner's computer, then open `index.html` in a browser. This file, along with
   `styles.css`, has already been completed for you. You should see a simple site that says **"COLORS"** with four
   buttons underneath. Try clicking on the buttons. You'll notice that nothing happens. This is because there is currently
   no JavaScript to make anything happen. Let's change that.

2. Open up `assets/js/main.js`. This is where you will write all of your JavaScript. First, save each of the four buttons
   as variables (Hint: `getElementByID()`). Now JavaScript is aware of the elements that the user will be interacting with.

3. Every time a button is pushed, we will want to change the background color of the page to either red, green, blue,
   or a random color. Since we will be doing a very similar action in all four cases, we are going to create a function
   to avoid duplicating code. Add the following function to `main.js`, then implement the functionality described in its
   documentation.

   ```javascript
   /**
    * Sets the background color of the body to the specified color, or
    * to a random color if no color is provided.
    * @param color:    the color to make the background, this will be a hex
    *                  code provided as a String
    */
   function setBackgroundColor(color) {
       // YOUR CODE HERE
   }
   ```

   Some hints:

   * JavaScript does not require a parameter to be passed to a function when it's called, even if a parameter is in
     the function definition. If this happens, then the missing parameter will evaluate to `false` inside of the
     function. For example, if the above function was called as `setBackgroundColor()`, the statement `if(color)` would
     be skipped over, but the corresponding `else` would run.

   * The page's background color can be referenced with `document.body.style.backgroundColor`.

   * You have only explicitly learned how to generate random numbers, not random colors. However, keep in mind that
     with RGB, colors can be represented as three integers between 0 and 255 inclusive. If you combine this knowledge
     with your previous knowledge of String interpolation/concatenation, you'll be on the right track.

4. Finally, we just need JavaScript to run the `setBackgroundColor` function when the buttons get clicked on. This
   is accomplished with an `eventListener` (or four of them to be precise). Using the `addEventListener` function, add a
   `click` listener to each of the four buttons (which are conveniently ready for use from step 2). When a `click` occurs,
   we want to execute `setBackgroundColor` with the appropriate color (or lack thereof). If done correctly, you should
   now have a site that functions as intended!

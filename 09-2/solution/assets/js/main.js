// Create a variable for each of the four demos.
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var random = document.getElementById("random");

/**
 * Sets the background color of the body to the specified color, or
 * to a random color if no color is provided.
 * @param color:    the color to make the background, this will be a hex
 *                  code provided as a String
 */
function setBackgroundColor(color) {
    if (color) {    // Check to see if a color was provided...
        document.body.style.backgroundColor = color;    // ...if so, set the background to that color.
    } else {    // Otherwise, generate a random color
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // Generate a random color by putting together random values for r, g, and b
        document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// Add an eventListener for each of the buttons that waits for a click, then calls setBackgroundColor
red.addEventListener("click", function() { setBackgroundColor("#ff1841"); });
green.addEventListener("click", function() { setBackgroundColor("#1cff81"); });
blue.addEventListener("click", function() { setBackgroundColor("#56a8cf"); });
random.addEventListener("click", function() { setBackgroundColor(); });
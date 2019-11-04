

<img src="https://github.com/omundy/critical-web-design/blob/master/reference-sheets/img/js-strict.svg.png" width="120">

## Reference Sheet - Javascript





### An example Javascript document
```
// create three new variables and assign numeric values to them
var x = 5;
var y = 6;
var z = x + y;

// log the value of z to the console
console.log ("The value of z = "+ z);

// change the text inside the element with the id of `demo`
document.getElementById("demo").innerHTML = "Hello JavaScript";

```


### Javascript Terms

Term | Definition
--- | ---
[Variable](https://www.w3schools.com/js/js_variables.asp) | JavaScript variables are containers for storing data values. In the example above, x,y,z are variables.
[Data types](https://www.w3schools.com/js/js_variables.asp)<img width=200 height=1/> | JavaScript variables can hold many different types of data including primitives like [numbers](https://www.w3schools.com/js/js_numbers.asp) (`123` or `3.14`), [strings](https://www.w3schools.com/js/js_strings.asp) (`"alphanumeric characters"`), [booleans](https://www.w3schools.com/js/js_booleans.asp) (`true` or `false`); [arrays](https://www.w3schools.com/js/js_arrays.asp) like `[0,1,2,3]`, and [objects](https://www.w3schools.com/js/js_objects.asp) like `{"name":"Jane Doe"}`.
[Functions](https://www.w3schools.com/js/js_functions.asp) | A block of code designed to perform a particular task. Executed when other code invokes it (calls it).
[Comparison operators](https://www.w3schools.com/js/js_comparisons.asp) | Comparison operators are used to test for true or false. <ul><li>`=` assigns a value (`num = 100`)</li><li>`==` compares values *irregardless of type* (`100 == "100"`) == `true`</li><li>`===` tests a value and a type (`100 === 100`) == `true`</li></ul>
[Logical operators](https://www.w3schools.com/js/js_comparisons.asp) | Logical operators are used to determine the logic between variables or values. <ul><li>`&&` ("and") `(num > 10 && num < 101)` == `true`</li><li>`\|\|` ("or") `(num == 5 \|\| num == 100)` == `true`</li><li>`!` ("not") `!(num == 20)` == `true`</li></ul>




### Javascript Examples
Below are some examples of Javascript statements, properties, and methods

Statement | Outcome
--- | ---
[`var greeting = "hello world!"`](https://www.w3schools.com/js/js_variables.asp) | Create a new variable and assign it's value to a string
[`alert("hello world!")`](https://www.w3schools.com/js/js_output.asp) | Output a string or variable to an alert box
[`console.log("hello world!")`](https://www.w3schools.com/js/js_output.asp) | Output a string or variable to the Javascript console
[`Math.random()`](https://www.w3schools.com/js/js_math.asp)<img width=240 height=1/> | Returns a random number between 0 (inclusive), and 1 (exclusive) (e.g. 0–.999...)
[`Math.ceil(x)`](https://www.w3schools.com/js/js_math.asp)| returns the value of x rounded up to its nearest integer
[`Math.floor(x)`](https://www.w3schools.com/js/js_math.asp)| returns the value of x rounded down to its nearest integer
[`var myArr = [12,45,99]`](https://www.w3schools.com/js/js_arrays.asp)| Create an array with three indexes
[`console.log( myArr[2] )`](https://www.w3schools.com/js/js_arrays.asp)| Print the value of the third array index ("99") to the console
[`console.log( myArr.length )`](https://www.w3schools.com/js/js_arrays.asp)| Print the length of the array ("3") to the console
[`function foo(str){ if (foo != "") { console.log(foo); }}`](https://www.w3schools.com/js/js_functions.asp) | A function that prints a string to the console (*if* that string is not empty).








### Sources
* [Critical Web Design: HTML/CSS](https://docs.google.com/presentation/d/1x5yJObVVAyUj2uUV3VKqxvY1L2ucPrwKDUFKmZ2elUw/edit?usp=sharing)
* [W3Schools CSS](https://www.w3schools.com/js/default.asp)



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
[Data types](https://www.w3schools.com/js/js_variables.asp)<img width=200 height=1/> | Data type in programming is a category of data that is often represented in a specific way to be distinguished between each other. These data types have two categories: Primitive vs. Non-Primitive
[Functions](https://www.w3schools.com/js/js_functions.asp) | A block of code designed to perform a particular task. Executed when other code invokes it (calls it).
[Comparison operators](https://www.w3schools.com/js/js_comparisons.asp) | Comparison operators are used to test for true or false. <ul><li>`=` assigns a value (`num = 100`)</li><li>`==` compares values *irregardless of type* (`100 == "100"`) == `true`</li><li>`===` tests a value and a type (`100 === 100`) == `true`</li></ul>
[Logical operators](https://www.w3schools.com/js/js_comparisons.asp) | Logical operators are used to determine the logic between variables or values. <ul><li>`&&` ("and") `(num > 10 && num < 101)` == `true`</li><li>`\|\|` ("or") `(num == 5 \|\| num == 100)` == `true`</li><li>`!` ("not") `!(num == 20)` == `true`</li></ul>


### Javascript Data Types
A table of Javascript data types with examples

Statement | Outcome
--- | ---
[number](https://www.w3schools.com/js/js_numbers.asp) | A primitive type for any number; e.g. `123` or `3.14`
[string](https://www.w3schools.com/js/js_strings.asp) | A primitive type for any text, including numbers. Must be enclosed in single `'string'` or double `"string"` quotes; e.g. `"alphanumeric characters"` or `"123"` (note the quotes)
[boolean](https://www.w3schools.com/js/js_booleans.asp) | A primitive type for true or false; e.g. `true` or `false`
Undefined | A primitive type. Undefined value is assigned to newly created variable that isn’t assigned with any value; e.g. `var newVar; console.log(typeof newVar);` --> `undefined`
Null | A primitive type. `Null` represents a reference to a non-existent entity or some invalid address in memory. Similar to `undefined` but yet [different](https://www.w3schools.com/js/js_datatypes.asp) because `undefined == null` but `undefined !== null` (the type is still different)
Object | A complex type. This includes [arrays](https://www.w3schools.com/js/js_arrays.asp) like `[0,1,2,3]`, and [objects](https://www.w3schools.com/js/js_objects.asp) like `{"name":"Jane Doe"}`.
Function | [Functions](https://www.w3schools.com/js/js_functions.asp) are technically a complex data type; e.g. `function greeting(){ alert("hi!"); } console.log(typeof greeting);`



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


[<](../README.md)

<img src="../assets/img/logos/logo-js.png" width="120">

## Javascript Reference





## An example Javascript document
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


## Javascript Terms
A table of basic Javascript key words and concepts

Term | Definition
--- | ---
[Variable](https://www.w3schools.com/js/js_variables.asp) | JavaScript variables are containers for storing data values. In the example above, x,y,z are variables.
[Data types](https://www.w3schools.com/js/js_variables.asp)<img width=200 height=1/> | Data type in programming is a category of data that is often represented in a specific way to be distinguished between each other. Data types have two categories: Primitive vs. Non-Primitive
[Functions](https://www.w3schools.com/js/js_functions.asp) | A block of code designed to perform a particular task. Executed when other code invokes it (calls it).
[Comparison operators](https://www.w3schools.com/js/js_comparisons.asp) | Comparison operators are used to test for true or false. <ul><li>`=` assigns a value (`num = 100`)</li><li>`==` compares values *irregardless of type* (`100 == "100"`) == `true`</li><li>`===` tests a value and a type (`100 === 100`) == `true`</li></ul>
[Logical operators](https://www.w3schools.com/js/js_comparisons.asp) | Logical operators are used to determine the logic between variables or values. <ul><li>`&&` ("and") `(num > 10 && num < 101)` == `true`</li><li>`\|\|` ("or") `(num == 5 \|\| num == 100)` == `true`</li><li>`!` ("not") `!(num == 20)` == `true`</li></ul>


## Javascript Data Types
A table of Javascript data types with examples. Use `typeof <data or var>` to output a type; e.g. `typeof "hello";` ouputs: `string`

Type | Description
--- | ---
[number](https://www.w3schools.com/js/js_numbers.asp) | A primitive type that includes any number; e.g. `123` or `3.14` or even `NaN` (not a number) `typeof NaN;` outputs `number`
[string](https://www.w3schools.com/js/js_strings.asp) | A primitive type that includes any text, including numbers. Must be enclosed in single `'string'` or double `"string"` quotes; e.g. `"alphanumeric characters"` or `"123"` (note the quotes)
[boolean](https://www.w3schools.com/js/js_booleans.asp) | A primitive type for true or false; e.g. `true` or `false`
[undefined](https://www.w3schools.com/jsref/jsref_undefined.asp) | A primitive type. Undefined value is assigned to newly created variable that isn’t assigned with any value; e.g. `var newVar; console.log(typeof newVar);` ouputs: `undefined`
[null](https://www.w3schools.com/js/js_datatypes.asp) | A primitive type. `Null` represents a reference to a non-existent entity or some invalid address in memory. Similar to `undefined` but yet [different](https://www.w3schools.com/js/js_datatypes.asp) because `undefined == null` but `undefined !== null` (the type is still different)
[object](https://www.w3schools.com/js/js_objects.asp) | A complex type. This includes [arrays](https://www.w3schools.com/js/js_arrays.asp) like `[0,1,2,3]`, and [objects](https://www.w3schools.com/js/js_objects.asp) like `{"name":"Jane Doe"}`.
[function](https://www.w3schools.com/js/js_functions.asp) | Functions are technically a complex data type; e.g. `function greeting(){ alert("hi!"); } console.log(typeof greeting);` ouputs: `function`



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







## References

Critical Web Design Tutorials and references

- [HTML](html.md), [CSS](css.md), and [Javascript](javascript.md) reference sheets
- [HTML/CSS slides](https://docs.google.com/presentation/d/1x5yJObVVAyUj2uUV3VKqxvY1L2ucPrwKDUFKmZ2elUw/edit?usp=sharing)
- [Introduction to course concepts & software slides](https://docs.google.com/presentation/d/1OVCMHMfB_0gYgTtv2iMK_aCktJtCSRp1aRvH3T1W0JU/edit?usp=sharing)

Popular tutorials and guides - You should **still look for other ones that you might like better**!

- W3Schools [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/)
- Shay Howe's *[Learn to Code HTML & CSS](https://learn.shayhowe.com/)*
- Oliver James' *[HTML & CSS Is Hard (But Doesn't Have To Be)](https://www.internetingishard.com/html-and-css/)*
- Jessica Hische and Russ Maschmeyer's *[Don't Fear The Internet](http://www.dontfeartheinternet.com/)*

Technical references - The most accurate and comprehensive way to understand a code language.

- W3Schools [HTML Element](https://www.w3schools.com/tags/default.asp) and [CSS](https://www.w3schools.com/cssref/default.asp)
- MDN's [HTML: Hypertext Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
- MDN's [CSS: Cascading Stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTMLReference.io](https://htmlreference.io/)
- [CSSReference.io](https://cssreference.io/)

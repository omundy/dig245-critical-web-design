# Critical Web Design

Fall 2018 course demos

Course Website
https://owenmundy.com/teaching/critical-web-design/






## Tools and Tips



### HTML and CSS validator bookmarklet

Make a validator "bookmarklet":

1. Select and copy the code below

```javascript
var loc = document.location;
var css = window.open("http://jigsaw.w3.org/css-validator/validator?profile=css3&warning=0&uri=" + loc, "css");
var html = window.open("http://validator.w3.org/check?verbose=1&uri=" + loc, "html");

```
2. Paste it into the form [here](http://ted.mielczarek.org/code/mozilla/bookmarklet.html)
3. Change the name to `validate`
4. Click "Crunch"
5. Drag the "validate" link to your bookmark bar

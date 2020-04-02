

<img src="https://github.com/omundy/critical-web-design/blob/master/reference-sheets/img/CSS.3.svg.png" width="100">

## Reference Sheet - CSS




### An example CSS document
```
body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}
p {
  font-family: verdana;
  font-size: 20px;
}
```



### CSS Terms

Term | Definition
--- | ---
[Selectors](https://www.w3schools.com/css/css_syntax.asp) | Used to "find" (or select) the HTML elements you want to style. (e.g. the `p` in the example above selects all `<p>` elements on the page)
[Declaration](https://www.w3schools.com/css/css_syntax.asp) | The declaration includes a CSS property name and a value, separated by a colon. (in the example above `font-family: verdana;` is a declaration)
[Declaration block](https://www.w3schools.com/css/css_syntax.asp) | A "block" of one or more declarations (in the example above, everything between and include the curly braces `{}` is the declaration block)
[Property](https://www.w3schools.com/css/css_syntax.asp) | CSS properties describe what aspect of an element is being modified (in the example above `font-family` is a property)
[Value](https://www.w3schools.com/css/css_syntax.asp) | The value describes how the property will be changed (in the example above `verdana` is a value)


### CSS Selectors
Examples of common CSS selectors

Selector | Definition
--- | ---
[`*`](https://www.w3schools.com/css/css_selectors.asp) | Select every element on the page
[`p`](https://www.w3schools.com/css/css_selectors.asp) | Select all paragraph elements
[`.callout`](https://www.w3schools.com/css/css_selectors.asp) | Select all elements with the class `callout`
[`p.callout`](https://www.w3schools.com/css/css_selectors.asp) | Select *only* paragraph elements with the class `callout`
[`div, h1`](https://www.w3schools.com/css/css_selectors.asp) | Select all `div` elements and `h1` elements
[`div h1`](https://www.w3schools.com/css/css_selectors.asp) | Select only `h1` elements *inside* `div` elements



### CSS Properties
Common CSS properties

Property | Definition
--- | ---
[`background`](https://www.w3schools.com/css/css_background.asp) | The [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for background (e.g. `background: #ffffff url("tree.png") no-repeat right top;`)
[`background-color`](https://www.w3schools.com/css/css_background.asp) | Sets the background color of an element
[`border`](https://www.w3schools.com/css/css_border.asp) | Sets the border (the space between the padding and the margin. `border` is the shorthand for `border-top`, etc.
[`border-radius`](https://www.w3schools.com/cssref/css3_pr_border-radius.asp) | Defines the radius (how rounded they appear) of an element's corners.
[`color`](https://www.w3schools.com/css/css_colors.asp) | Sets the color of an element's text
[`font`](https://www.w3schools.com/css/css_font.asp) | The shortcut for font (e.g. `font: 12px/16px Arial;`)
[`font-family`](https://www.w3schools.com/css/css_font.asp) | Sets the font of an element's text
[`font-style`](https://www.w3schools.com/css/css_font.asp) | Sets the style of an element's text
[`font-size`](https://www.w3schools.com/css/css_font.asp) | Sets the size of an element's text
[`font-weight`](https://www.w3schools.com/css/css_font.asp) | Sets the weight of an element's text
[`margin`](https://www.w3schools.com/css/css_margin.asp) | Sets the margin (the space outside the content and border) of an element. `margin` is the shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` (and they are listed in this order).
[`padding`](https://www.w3schools.com/css/css_padding.asp) | Sets the padding (the space outside the content and inside the border) of an element. `padding` is the shorthand for `padding-top`, etc.
[`position`](https://www.w3schools.com/css/css_positioning.asp) | Determines the position of an element. Can be `static` (default, relative to html flow), `relative` (relative to parent position), `fixed` (breaks from the flow, relative to top left, stays in place when page is scrolled), or `absolute` (breaks from the flow, relative to top left, *moves* when page is scrolled).
[`text-align`](https://www.w3schools.com/css/css_align.asp) | Sets the alignment of text inside an element
[`z-index`](https://www.w3schools.com/cssref/pr_pos_z-index.asp) | Specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.








### Sources
* [Critical Web Design: HTML/CSS](https://docs.google.com/presentation/d/1x5yJObVVAyUj2uUV3VKqxvY1L2ucPrwKDUFKmZ2elUw/edit?usp=sharing)
* [W3Schools CSS](https://www.w3schools.com/css/default.asp)

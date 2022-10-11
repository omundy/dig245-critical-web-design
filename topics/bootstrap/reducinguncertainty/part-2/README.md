# Reducing Uncertainty - Part 2

This week we will be finishing up our reconstruction of [reducinguncertainty.org](https://reducinguncertainty.org/).
The remaining work involves correctly positioning the site's elements. As you may imagine, this could become quite
tedious and difficult while using only basic CSS. So, we are going to use the [Bootstrap](https://getbootstrap.com)
framework to accomplish this. Bootstrap will provide us with a layer of abstraction so that many of the most common
positioning tasks become as simple as adding a class to an element.

## Assignment

This directory contains a completed version of [Reducing Uncertainty - Part 1](../03-2/README.md) as a starting
point in the event that you did not finish that assignment. It also contains some additional styles and code that you
may not have included in Part 1 but will be helpful nonetheless.

Complete the following tasks with a partner:

1. First, we need to add [Bootstrap](https://getbootstrap.com) to our project. You may have noticed on their website
   that you can download the requisite files and add them to your project. However, they can also be imported remotely,
   which is much easier. This can be done by adding the following code to `index.html`.

   ```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
   ```

2. The rest of this exercise will be largely self-guided as you explore Bootstrap. Your goal is to use the framework to
   replicate [reducinguncertainty.org](https://reducinguncertainty.org/) as accurately as you can. Here are some things
   to keep in mind on your journey:

   * Bootstrap revolves around the grid system. Once you determine the basic layout of the site's grid, everything else
     will fall into place more easily.

   * There are a few Bootstrap classes that will be critical to your success, such as `container`, `row`, and variations
     of `col`. Bootstrap also caters to common features of websites, such as the navigation bar (`navbar`, `fixed-top`,
     `nav-item`, `nav-link`). _This is by no means an exhaustive list of the classes you might need though._

   * It is possible, and often necessary, to override or add to pieces of Bootstrap's classes in your own CSS.

   * **You will not be able to perfectly replicate the full site in this assignment, and that is both okay and
     expected.** You should focus more on replicating the basic layout and look of the site,
     rather than getting caught up on minutiae.

3. Celebrate! You have successfully styled a complete website - perhaps the most important but difficult facet of
   web development.

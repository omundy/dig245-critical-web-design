# Reducing Uncertainty - Part 1

Over the next few weeks, you will be recreating parts of the site [reducinguncertainty.org](https://reducinguncertainty.org/)
in order to gain experience with CSS. The full site relies heavily on JavaScript as well as some technologies we
won't be covering in this class, so you will be focusing only on the look of the site. You will be adding to this site
in the following weeks as you learn more about CSS.

## Assignment

You have been provided with an `index.html` file for [reducinguncertainty.org](https://reducinguncertainty.org/).
Use this as your starting point. It contains all of the content of the site, but currently has no styling.

Now, complete the following tasks with a partner:

1. Download `demo/` to one partner's computer.

2. Open `index.html` in a browser, and compare it to the live version of
   [reducinguncertainty.org](https://reducinguncertainty.org/). Notice that all of the content is the same
   (except for the interactive map), but it just looks different.

3. In order to style the site, you first need a place to put your CSS. We will use an external stylesheet to keep things
   organized and make our lives easier. We will use `assets/css/styles.css` to hold all of the CSS (this file is
   currently empty). Add a link to this stylesheet in the `index.html` file.

4. Now you will give your site the appropriate typography and colors. Keep in mind that it is best practice to always use
   the lowest level of specificity as possible. In other words, classes are your friend. Your task is to add classes
   to elements in `index.html` and create the corresponding selectors in `styles.css` in order to realize the following
   styles:

   * **Main Font:** `Open Sans` or `sans-serif`, weight of 400

   * **Header Font:** `Roboto Slab` or `serif`

     _Note: You are able to use the `Roboto Slab` font because it has already been imported for you from a remote
     location. More on this later in the semester._

   * **Header Color:** `#484848`

   * **Link and Navbar Color:** `#56a8cf`

   * **Footer Background Color:** `#396590`

   The previous bullet points are meant to guide you in the right direction, but you may find that there are some changes
   you need to make along the way that are not explicitly listed here. Once you feel as though you have accurately
   recreated the typography and color of the site, you have finished this assignment. In the coming weeks, we will add
   on to this by correctly positioning everything on the screen.

5. (Optional) If you have time, you may want to look through the live site and figure out what elements will share classes.
   If you create all of the necessary classes now, even if they don't actually have any rules applied to them, you will
   save yourself some time down the road.

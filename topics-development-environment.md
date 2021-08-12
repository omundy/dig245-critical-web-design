
[<](README.md)

<img width="300" src="assets/img/banner-web-development.png">

# Web Development Environment

Learn to setup your web development environment!

<!--

### Contents

1. [Learning Objectives](#learning-objectives)
1. [Class communication](#class-communication) `1 min`
1. [Visual editors](#visual-editors) `2 min`
1. [Web Browsers](#web-browsers) `10 min`
1. [Text Editor](#web-browsers) `10 min`
1. [Discussion](#discussion) `5 min`
1. [References](#references)

## Learning Objectives

Students who complete the following will be able to:

- Discuss popular web browsers, and rank them by browser market share
- List essential tools for frontend web development and describe their purpose
- Recall popular code editors and their features
- Demonstrate how to install and configure software for a web development environment

-->


## Crash course

Get ready for this course. Install / create accounts:

- [Slack](#slack) - communication
- [Terminal](#command-line) - basic computing
- [Visual editor](#visual-editor) - design
- [Web browsers](#web-browsers) - to test your web pages
- [Code Editors](#code-editors) - to build
- [Version Control](#version-control) - to access class demos, manage code versions, and turn in assignments






## Slack

- Class communication will happen via [Slack](https://slack.com/)
- Download the desktop and mobile app and enable notifications.







<img src="assets/img/tally-wireframe-to-finished.png" width=700>

<sup>Wireframes / post-it note brainstorm on the left, Photoshop mockup on the right. [View final version](https://tallysavestheinternet.com/).</sup>

## Visual Editor

You need a visual editor to design websites

- It is essential to pre-visualize what you plan to code, before you start coding.
- Good design requires iteration to compare versions as you improve.
- When you design you need to make and judge lots of visual changes quickly. Coding can be slow.
- I recommend starting with pencil / paper for [wireframes](https://www.google.com/search?q=wireframe&sxsrf=ALeKk00LBL378L-L6vFVoAIpOtV5ohu-Ag:1628726643589&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiVu5vIl6ryAhWkRDABHYgVDr8Q_AUoAXoECAEQAw&biw=1920&bih=1096), then transition to a tool where you visualize your design as close to the final outcome. This means the same color (RGB), resolution (pixel dimensions), and graphics representing exactly what you will represent in code.


### Options

- [Figma](https://www.figma.com/) - [free](https://www.figma.com/pricing/), widely used to layout, animate, and prototype websites and apps.
- Photoshop - an industry standard but expensive. Use it for free in VAC 212 (CAT Card access 8am–1am).
- [Gimp](https://www.gimp.org/) - free, open source Photoshop alternative. Opens PSDs and [tutorials available](https://www.google.com/search?q=gimp+web+design+tutorial).





## Web Browsers

A web browser is more than the software we use to access data on the internet. Browsers manage requests for hundreds of remote files on web servers, combine and render response data as media-rich "web pages", and make them interactive to provide the essential hyperlink ([1965](https://en.wikipedia.org/wiki/Hyperlink#History)) function that "connects"" information on the internet.

<img src="assets/img/http-requests.png">

For every page visited:

1. A user clicks on a link on a page in the browser
1. The browser [requests](https://bytesofgigabytes.com/networking/how-http-request-and-response-works/) the new page from that website server (the computer where the files are stored)
1. The browser receives a response, and requests all other content (stylesheets, scripts, images, etc) for the page
1. Finally, the browser renders the all this content on a user's device and they continue the process.


### The Browser Wars

Browsers are not all created the same. Some only run on desktop or mobile. Others only run on specific operating systems. There are big differences in how browsers follow (or not!) the [WC3 standards](https://www.w3.org/standards/) when they render the pages you build. Even the browser versions can be quite distinct. Ask any veteran web developer what it was like to work around the bugs on [Internet Explorer 6](https://www.theverge.com/2014/4/8/5593584/the-most-hated-browser-in-the-world-is-finally-dead)!

<img src="assets/img/browser-wars-2008-2019.png">
<sup>Graphic depicting usage share during the 2nd <a href="https://en.wikipedia.org/wiki/Browser_wars">browser wars</a> (2008–)</sup>

The web browser is the primary vehicle through which users will encounter your web pages. It follows then, that it is extremely important to make sure that you code and test your pages in the same environment of users. While it would be overwhelming to test the [many](https://en.wikipedia.org/wiki/List_of_web_browsers) different browsers, operating systems, and display sizes, lucky for us, some are more popular than others.

### Discussion

With your group, examine the following table containing usage share on ***all*** (desktop and mobile) browsers:

1. What do you notice?
2. Based on this data, what do you think the three most important browsers are to install and use in testing?





Browser | [StatCounter](https://gs.statcounter.com/browser-market-share) <sup>8/2021</sup> | [Wikimedia](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser) <sup>11/2019</sup> | Platform(s)
--- | ---: | ---: | ---
<img width=20 src="assets/img/logos/browsers/chrome_24x24.png"> [Google Chrome](https://www.google.com/chrome/)* | 65.1% | 48.7% | Windows, MacOS, iOS, Linux
<img width=20 src="assets/img/logos/browsers/safari_24x24.png"> [Safari Browser](https://www.apple.com/safari/) | 18.6% | 22.0% | MacOS & iOS only 😢
<img width=20 src="assets/img/logos/browsers/firefox_24x24.png"> [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/) | 3.4% | 4.9% | Windows, MacOS, iOS, Linux
<img width=20 src="assets/img/logos/browsers/edge_24x24.png"> [Microsoft Edge](https://www.microsoft.com/en-us/edge)* | 3.4% | 1.9% | Windows, MacOS
<img width=20 src="assets/img/logos/browsers/samsung-internet_24x24.png"> [Samsung Internet](https://en.wikipedia.org/wiki/Samsung_Internet)* | 3.1% | 2.7% | Android & Tizen only 😢
<img width=20 src="assets/img/logos/browsers/opera_24x24.png"> [Opera Browser](https://www.opera.com/)* | 2.1% | 1.1% | Windows, MacOS, iOS, Linux
<img width=20 src="assets/img/logos/browsers/internet-explorer-tile_10-11_24x24.png"> [Internet Explorer](https://www.opera.com/) | 0.6% | 3.9% | Windows only 😢
Others | 4.6% | 14.5% | ---


<sup>*Desktop or mobile version (or both) based on <img width=20 src="assets/img/logos/browsers/chromium_24x24.png"> [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) like <img width=20 src="assets/img/logos/browsers/brave_24x24.png"> [Brave](https://brave.com/).</sup>


Next, compare the data from the Wikipedia [browser usage share article](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables), the [StatCounter](https://gs.statcounter.com/browser-market-share), and [Wikimedia](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser).

3. What do you notice now?
4. Did your top three browsers change?


<details>
<summary>Click to learn which browsers you should install</summary>

#### Recommendation

Did you guess, "I should install all of them?" That's not an incorrect answer. Two important things to learn from the above:

- 50% of all users are now mobile users. This affects not only the browsers you test on but how you accommodate different display resolutions and devices.
- And, Chrome is a clone, but it is far and wide the most popular iteration of the Chromium browser.

</details>






## Code Editors



### Atom

<img src="assets/img/logos/atom-icon-png.png" width=100 >

Atom is a free and open-source text and source code editor for macOS, Linux, and Windows. It has support for plug-ins written in JavaScript, embedded Git Control, and is developed by GitHub.

> There are many great source code editors, like [Sublime text](https://www.sublimetext.com/) and [Visual Studio Code](https://code.visualstudio.com/), which are also both multi-platform, free, and highly capable. However, my preferred editor for web development, and this class, is Atom.


#### Installation

Download and install [Atom](https://atom.io/) and then install the following packages in Atom > Settings:

- [atom-beautify](https://atom.io/packages/atom-beautify) - Beautify HTML, CSS, JavaScript, PHP, Python, etc. code to make it more readable.
- [emmet](https://atom.io/packages/emmet) - The essential tool for web developers
- [file-icons](https://atom.io/packages/file-icons) - Assign file extension icons and colours for improved visual grepping
- [pigments](https://atom.io/packages/pigments) - A package to display colors in project and files
- [linter](https://atom.io/packages/linter) - A [linter](https://en.wikipedia.org/wiki/Lint_(software)) for Atom
- [linter-jshint](https://atom.io/packages/linter-jshint) - Linter plugin for JavaScript; [jshint docs](https://jshint.com/docs/options/), sample `.jshintrc` [browser](https://github.com/omundy/sample-extension-listener/blob/master/.jshintrc) and [node](https://github.com/omundy/sample-node-osm-leaflet/blob/master/.jshintrc)
- [open-file](https://atom.io/packages/open-file) - Open a file from Atom in your default app (e.g. web browser)
- [open-terminal-here](https://atom.io/packages/open-terminal-here) - Open the command line in the location you choose in the tree view.


#### How to install a package in Atom:

1. Access Settings:
	- Use the key command: `CMD + ,`
	- or choose Atom > Preferences > Settings
	- or choose Packages > Settings View
1. In Settings, click on the Install tab and search for a package
1. Verify the name (they don't always sort correctly by popularity) and click Install

![install packages](assets/img/software-atom-packages.png)



#### Atom Tips

1. Hide Ignored Names - to keep `.git` and `.DS_store` files from cluttering up the tree view:
	1. Go go `Settings > Packages`
	1. Search for "Tree View"
	1. Check `Hide Ignored Names`
1. Install Atom Shell Commands
	1. Click Atom → Install Shell Commands
1. Open Atom from the command line in MacOS
	1. In Terminal, `cd` to the directory you want to open
	1. Type `atom .` to open the current directory in the editor









## Version Control

We will be using Git and Github Desktop for version control, demos, turning in assignments, and collaboration.

If you have finished all of the above, go ahead and jump into the [Git & Github Desktop slides](https://docs.google.com/presentation/d/1vtK6LoqwF4rQQZZy-ovuEgsYUwwMRXsqDVMOjAPSBt0/edit#slide=id.g9165d0d9fd_0_120).





## References

1. [alrra/browser-logos](https://github.com/alrra/browser-logos)

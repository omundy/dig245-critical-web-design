
[<](../../README.md)

<img width="375" src="../../assets/img/banner-web-development.png">

# Web Development Environment

Set up your web development environment!


---

## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete this module will be able to:

Students who complete the following will be able to:

- Compare popular web browsers by browser market share
- List essential tools for frontend web development and describe their purpose
- Demonstrate how to install and configure software for a web development environment

</details>









---

## Contents

Get ready for this course. Install / create accounts:

1. [Slack](#slack) - communication
1. [Command line](#command-line) - basic computing
1. [Project folder](#project-folder) - where you'll keep all your projects for the class
1. [Visual editor](#visual-editor) - design
1. [Web browsers](#web-browsers) - to test your web pages
1. [Code Editors](#code-editors) - to build
1. [Version Control](#version-control) - to access class demos, manage code versions, and turn in assignments


---

## Slack

- Class communication will happen via [Slack](https://slack.com/).
- 👉 [Download](https://slack.com/download) the desktop and mobile app and enable notifications.
- Watch for an invitation to join the class Slack.



---

## Command line

- The command line allows you to control your computer via a text interface.
- 👉 Complete the [command line crash course](https://github.com/omundy/learn-computing/blob/main/topics/command-line.md#crash-course) before proceeding.


---

## Sites folder

<img src="../../assets/img/project-folder.png">

👉 Follow these steps to create a Sites folder for all your class projects and demos.

1. Go to your [home folder](https://github.com/omundy/learn-computing/blob/main/topics/files-folders.md#paths). The path (depending on your OS) is:
	- Mac: `/Users/<yourusername>/`
	- Windows: `C:\Users\<yourusername>\`
1. Create a new folder in your `home` called Sites (yes, uppercase S). The path will be:
	- Mac: `/Users/<yourusername>/Sites/`
	- Windows: `C:\Users\<yourusername>\Sites\`
1. Create a new folder in Sites called `critical-web-design`. The path will be:
	- Mac: `/Users/<yourusername>/Sites/critical-web-design/`
	- Windows: `C:\Users\<yourusername>\Sites\critical-web-design\`





---

## Visual Editor

Designing websites requires a visual editor:

- Good design requires multiple iterations. A visual editor lets you compare and improve on previous versions of a design.
- Coding is slow. When you design you need to make and quickly judge many visual changes. With a design tool you can pre-visualize the layout before you code.
- Start new designs with pencil and paper or a whiteboard to create [wireframes](https://www.google.com/search?q=wireframe&sxsrf=ALeKk00LBL378L-L6vFVoAIpOtV5ohu-Ag:1628726643589&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiVu5vIl6ryAhWkRDABHYgVDr8Q_AUoAXoECAEQAw&biw=1920&bih=1096). Then transition to [Figma](https://www.figma.com/) to complete detailed versions of your design that exactly match (color, resolution, graphics) what you will code. You can even prototype your projects, adding [animation](https://help.figma.com/hc/en-us/articles/360039818874-Create-advanced-animations-with-Smart-Animate) and [interaction](https://www.youtube.com/watch?v=-sAAa-CCOcg) to see how the user experience *feels*.

👉 Create a free [Figma account](https://www.figma.com/) and start experimenting!


---

## Product comparison

Product | Cost | Description | Cons
--- | --- | --- | ---
<img src="../../assets/img/logos/logo-figma.png" width=30> [Figma](https://www.figma.com/) | [free](https://www.figma.com/pricing/) | Widely used to layout, illustrate, animate, and prototype websites and apps. | ?
Photoshop | $$$ | Industry standard, uses pixels, capable of web design and much more. | Expensive. Large learning curve.
Illustrator | $$$ | Excellent at vector graphics, therefore should only be used for illustration and print work. | Expensive. Large learning
[Gimp](https://www.gimp.org/) | free | Open source Photoshop alternative. Opens PSDs. [Tutorials available](https://www.google.com/search?q=gimp+web+design+tutorial). | Interface can feel clunky. Not widely used.

<sup>*Use Adobe products for free in VAC 212 (CAT Card access 8am–1am).</sup>


<img src="../../assets/img/tally-wireframe-to-finished.png" width=700>







---

## Web Browsers

A web browser is more than the software you use to access data on the internet. Browsers manage requests for hundreds of remote files on web servers, combine and render response data as media-rich "web pages", and make them interactive to provide the essential hyperlink ([1965](https://en.wikipedia.org/wiki/Hyperlink#History)) function that "connects"" information on the internet.



---

## Request > Response <

<img src="../../assets/img/http-requests.png">

For every page visited:

1. A user clicks on a link on a page in the browser
1. The browser [requests](https://bytesofgigabytes.com/networking/how-http-request-and-response-works/) the new page from that website server (the computer where the files are stored)
1. The browser receives a response, and requests all other content (stylesheets, scripts, images, etc) for the page
1. Finally, the browser renders the all this content on a user's device and they continue the process.


---

## The Browser Wars

Browsers are not all created the same. Some only run on desktop or mobile. Others only run on specific operating systems. There are big differences in how browsers follow (or not!) the [WC3 standards](https://www.w3.org/standards/) when they render the pages you build. Even the browser versions can be quite distinct. Ask any veteran web developer what it was like to work around the bugs on [Internet Explorer 6](https://www.theverge.com/2014/4/8/5593584/the-most-hated-browser-in-the-world-is-finally-dead)!

<img src="../../assets/img/browser-wars-2008-2019.png">
<sup>Graphic depicting usage share during the 2nd <a href="https://en.wikipedia.org/wiki/Browser_wars">browser wars</a> (2008–)</sup>

Since the browser is the primary vehicle through which users will encounter your web pages, it follows that it is essential to test your coded pages in the same environment. It would be overwhelming to test every page in all the [different browsers, operating systems, and display sizes that are available](https://en.wikipedia.org/wiki/List_of_web_browsers), but lucky for us, some browsers are more popular than others.

### 👉 Discussion

With your group, examine the following table containing usage share on ***all*** (desktop and mobile) browsers:

1. What do you notice?
2. Based on this data, what do you think the three most important browsers are to install and use in testing?





Browser | [StatCounter](https://gs.statcounter.com/browser-market-share) <sup>8/2021</sup> | [Wikimedia](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser) <sup>11/2019</sup> | Platform(s)
--- | ---: | ---: | ---
<img width=20 src="../../assets/img/logos/browsers/chrome_24x24.png"> [Google Chrome](https://www.google.com/chrome/)* | 65.1% | 48.7% | Windows, MacOS, iOS, Linux
<img width=20 src="../../assets/img/logos/browsers/safari_24x24.png"> [Safari Browser](https://www.apple.com/safari/) | 18.6% | 22.0% | MacOS & iOS only 😢
<img width=20 src="../../assets/img/logos/browsers/firefox_24x24.png"> [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/) | 3.4% | 4.9% | Windows, MacOS, iOS, Linux
<img width=20 src="../../assets/img/logos/browsers/edge_24x24.png"> [Microsoft Edge](https://www.microsoft.com/en-us/edge)* | 3.4% | 1.9% | Windows, MacOS
<img width=20 src="../../assets/img/logos/browsers/samsung-internet_24x24.png"> [Samsung Internet](https://en.wikipedia.org/wiki/Samsung_Internet)* | 3.1% | 2.7% | Android & Tizen only 😢
<img width=20 src="../../assets/img/logos/browsers/opera_24x24.png"> [Opera Browser](https://www.opera.com/)* | 2.1% | 1.1% | Windows, MacOS, iOS, Linux
<img width=20 src="../../assets/img/logos/browsers/internet-explorer-tile_10-11_24x24.png"> [Internet Explorer](https://www.opera.com/) | 0.6% | 3.9% | Windows only 😢
Others | 4.6% | 14.5% | ---


<sup>*Desktop or mobile version (or both) based on <img width=20 src="../../assets/img/logos/browsers/chromium_24x24.png"> [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) like <img width=20 src="../../assets/img/logos/browsers/brave_24x24.png"> [Brave](https://brave.com/). ([logos](https://github.com/alrra/browser-logos))</sup>


Next, compare the data from the Wikipedia [browser usage share article](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables), the [StatCounter](https://gs.statcounter.com/browser-market-share), and [Wikimedia](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser).

3. What do you notice now?
4. Did your top three browsers change?


<details>
<summary>Click to learn which browsers you should install</summary>

#### Recommendation

Did you guess, "I should install all of them?" That's not an incorrect answer. Two important things to learn from the above:

- 50% of all users are now mobile users. This affects not only the browsers you test on but how you accommodate different display resolutions and devices.
- And, Chrome is a clone, but it is far and wide the most popular iteration of the Chromium browser.
- 👉 Install Chrome and Firefox

</details>




---

## Code Editors

[Source-code editors](https://en.wikipedia.org/wiki/Source-code_editor) are text editors designed for writing source code. They might be standalone programs, or run in an integrated development environment (IDE) or a web browser. There are [many great source code editors](https://en.wikipedia.org/wiki/Comparison_of_text_editors), many of which are multi-platform, free, and highly capable. Here are a few that I have found useful:

- [VS Code](https://code.visualstudio.com/)
- [Sublime text](https://www.sublimetext.com/)
- ~~Atom Editor~~ [Pulsar](https://pulsar-edit.dev/)
- [Komodo Edit](https://www.activestate.com/products/komodo-edit/)



---

## Install and Configure VS Code

<img src="../../assets/img/logos/logo-vscode.png" width=70> 

VS ("Visual Studio") Code is a free source code editor for macOS, Linux, and Windows. It has support for extensions to add functionality to the editor and embedded Git controls. VS Code is developed Microsoft.

👉 Download and install [VS Code](https://code.visualstudio.com/download) then follow the tips below.

- [Mac](https://code.visualstudio.com/docs/setup/mac) and [Windows](https://code.visualstudio.com/docs/setup/windows) installation
- MacOS: [Enable command line launching](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) (e.g. `code .` to open a project)
- Install [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser) extension to open a page in your default web browser
- Review these introductions on the [user interface](https://code.visualstudio.com/docs/getstarted/userinterface) and [HTML support](https://code.visualstudio.com/Docs/languages/html)







---

## Atom

<img src="../../assets/img/logos/logo-atom.png" width="80px">

Atom [***was***](https://github.blog/2022-06-08-sunsetting-atom/) a free and open-source source code editor for macOS, Linux, and Windows. Built by GitHub using the [Electron framework](https://en.wikipedia.org/wiki/Electron_(software_framework)), it supported plug-ins written in JavaScript, embedded Git controls, and more. Fans for Atom should migrate to the open source fork called [Pulsar](https://pulsar-edit.dev/) 


<details>
<summary>Atom Install Instructions (depreciated)</summary>

Download and install [Atom](https://atom.io/). Then, install the following packages in Atom > Settings:

- [atom-beautify](https://atom.io/packages/atom-beautify) - Beautify HTML, CSS, JavaScript, PHP, Python, etc. code to make it more readable.
- [emmet](https://atom.io/packages/emmet) - The essential tool for web developers
- [file-icons](https://atom.io/packages/file-icons) - Assign file extension icons and colours for improved visual grepping
- [pigments](https://atom.io/packages/pigments) - A package to display colors in project and files
- [linter-jshint](https://atom.io/packages/linter-jshint) - [linter](https://en.wikipedia.org/wiki/Lint_(software)) for JavaScript; [jshint docs](https://jshint.com/docs/options/), sample `.jshintrc` [browser](https://github.com/omundy/sample-extension-listener/blob/master/.jshintrc) and [node](https://github.com/omundy/sample-node-osm-leaflet/blob/master/.jshintrc) (this will also prompt to install dependent packages like [linter](https://atom.io/packages/linter))
- [open-file](https://atom.io/packages/open-file) - Open a file from Atom in your default app (e.g. web browser)
- [open-terminal-here](https://atom.io/packages/open-terminal-here) - Open the command line in the location you choose in the tree view.

### Optional

- On Windows the [copy-path](https://atom.io/packages/copy-path) can convert backslashes to forward slashes, which are required for paths on the www.


### How to install a package in Atom:

1. Access Settings:
	- Use the key command: `CMD + ,`
	- or choose Atom > Preferences > Settings
	- or choose Packages > Settings View
1. In Settings, click on the Install tab and search for a package
1. Verify the name (they don't always sort correctly by popularity) and click Install

![install packages](../../assets/img/software-atom-packages.png)

---

## Atom Tips

### Hide Ignored Names
To keep `.git` and `.DS_store` files from cluttering up the tree view:
1. Go go Settings → Packages
1. Search for "Tree View"
1. Check `Hide Ignored Names`

### Open a project folder in Atom
Any of the below:
- Atom: Choose File > Open and select the folder
- Finder: Drag the project folder into the Atom icon in the dock (Mac)
- Github Desktop:
	- Choose Repository > Open in Atom
	- Or press Command + A

### Open a project in Atom from the command line in MacOS
1. Click Atom → Install Shell Commands
1. In Terminal, `cd` to the directory you want to open
1. Type `atom .` to open the current directory in the editor

### Format "beautify" your code
This is essential for source code editing. In any file, either
- press `Ctl + Option + B`
- or choose Packages → Atom Beautify → Beautify

</details>





---

## Version Control

We will be using Git and Github Desktop for version control, demos, turning in assignments, and collaboration.

👉 Review the [Git & Github Desktop slides](https://docs.google.com/presentation/d/1vtK6LoqwF4rQQZZy-ovuEgsYUwwMRXsqDVMOjAPSBt0/edit#slide=id.g9165d0d9fd_0_120)

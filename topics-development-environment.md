
[<](README.md)

<img width="300" src="assets/img/banner-web-development.png">

# Web Development Environment

Learn to setup your web development environment!

### Contents

1. [Learning Objectives](#learning-objectives)
1. [Introduction](#introduction) `5 min`
1. [Web Browsers](#web-browsers) `5 min`



1. [Discussion](#discussion) `5 min`
1. [Keep practicing](#keep-practicing)
1. [References](#references)

## Learning Objectives

Students who complete the following will be able to:

- Discuss popular web browsers, and rank them by browser market share
- List essential tools for frontend web development and describe their purpose
- Recall popular code editors and their features
- Demonstrate how to install and configure software for a web development environment




## Communication


- [Slack](https://slack.com/) - we’ll try to keep all live chats here so we can reference them later.






## Web Browsers

A web browser (or just, "browser") is the software we use to access the World Wide Web. A browser is also called a **client** for it is dependent upon a **server** to request and render web pages and their content. For example, for every page visited on the internet:

1. A user clicks on a link on a page (in the browser).
1. The browser [requests](https://bytesofgigabytes.com/networking/how-http-request-and-response-works/) the new web page from that website's server (a computer where the files are stored).
1. The browser receives the HTML page that was requested.
1. The browser then requests all other web page content (stylesheets, javascript, image and other media).
1. Once received, the browser renders the content on the user's device (and they continue the process).

<img src="assets/img/http-requests.png">


### Discussion

The web browser is the primary vehicle through which users will encounter your web pages. But they are not all created the same. Some only run on desktop, or mobile. Others only run on certain operating systems. Besides the difference in display size there are big differences in how browsers follow (or not!) the [WC3 standards](https://www.w3.org/standards/) when they render the pages you build. Even the different versions of the browsers can be quite different. For example, just ask any veteran web developer what it was like to deal with the bugs on [Internet Explorer 6](https://www.theverge.com/2014/4/8/5593584/the-most-hated-browser-in-the-world-is-finally-dead)!

It follows then, that it is extremely important to make sure that you code and test your pages on the same (or representative) browsers of your users. While this could mean testing the [many](https://en.wikipedia.org/wiki/List_of_web_browsers) different browsers, operating systems, some are more popular than others.

With your group, examine the following table containing usage share on ***all*** (desktop and mobile) browsers:

1. What do you notice?
2. Based on this data, what do you think the three most important browsers are to install and use in testing?

Next, compare the data from [Wikipedia browser usage share article](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables), the [StatCounter](https://gs.statcounter.com/browser-market-share), and [Wikimedia](https://analytics.wikimedia.org/dashboards/browsers/#all-sites-by-browser).

3. What do you notice now?
4. Did your top three browsers change?



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


*Desktop or mobile version (or both) based on <img width=20 src="assets/img/logos/browsers/chromium_24x24.png"> [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) like <img width=20 src="assets/img/logos/browsers/brave_24x24.png"> [Brave](https://brave.com/).


















## Browser extensions for web development

- [Markdown Viewer](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk/related?hl=en) let's you preview `.md` files in your browser so you can work on your README files locally.
- [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US) will highlight and format JSON in the browser to help you analyze and work with it.
- [Adblock Plus](https://adblockplus.org/) will help you preserve your sanity (and maybe your privacy) while working online.




## Code Editors


### Atom

Download [Atom](https://atom.io/) and install the following packages:

- [atom-beautify](https://atom.io/packages/atom-beautify) - Beautify HTML, CSS, JavaScript, PHP, Python, and more!
- [emmet](https://atom.io/packages/emmet) - The essential tool for web developers
- [file-icons](https://atom.io/packages/file-icons) - Assign file extension icons and colours for improved visual grepping
- [pigments](https://atom.io/packages/pigments) - A package to display colors in project and files
- [remote-ftp](https://atom.io/packages/remote-ftp) - Enable browsing remote SFTP just like the built-in Tree View
- [linter](https://atom.io/packages/linter) - A [linter](https://en.wikipedia.org/wiki/Lint_(software)) for Atom
- [linter-jshint](https://atom.io/packages/linter-jshint) - Linter plugin for JavaScript; [jshint docs](https://jshint.com/docs/options/), sample `.jshintrc` [browser](https://github.com/omundy/sample-extension-listener/blob/master/.jshintrc) and [node](https://github.com/omundy/sample-node-osm-leaflet/blob/master/.jshintrc)
- [open-file](https://atom.io/packages/open-file) - Open a file from Atom in your default app (e.g. web browser)

#### Atom Settings

1. Hide Ignored Names - This will make sure you `.git` and `.DS_store` files don't clutter up the tree view. `CMD + ,` then choose Packages > Tree View and [x] `Hide Ignored Names`



### Others

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)




## Version Control

1. [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-mac-md)
1. [Github Desktop](https://desktop.github.com/)


## Advanced Web Development

1. [Homebrew](https://brew.sh/)
1. [NVM/Node](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)
1. [Cyberduck](https://cyberduck.io/)


### Databases

1. [TablePlus](https://tableplus.com/download)


### Productivity

1. [Rectangle](https://rectangleapp.com/)
1. [Notational Velocity](http://notational.net/)







## References

1. Browser logos from [alrra/browser-logos](https://github.com/alrra/browser-logos)

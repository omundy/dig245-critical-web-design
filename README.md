# Critical Web Design

Tutorials, demos, and resources for [DIG 245 Critical Web Design](https://owenmundy.com/teaching/critical-web-design/)





## Tutorials, Tools, and References


### General

* Critical Web Design Reference Sheets: [HTML](reference-sheets/html.md), [CSS](reference-sheets/css.md), [Javascript](reference-sheets/javascript.md)
* [CWD Technical References](https://docs.google.com/presentation/d/1OVCMHMfB_0gYgTtv2iMK_aCktJtCSRp1aRvH3T1W0JU/edit?usp=sharing)
* W3Schools [HTML](https://www.w3schools.com/tags/default.asp), [CSS](https://www.w3schools.com/cssref/default.asp), and [Javascript](https://www.w3schools.com/jsref/default.asp) references
* [http.cat](https://http.cat/)


### Javascript

* [Async JavaScript, a Pocket Reference: Learn asynchronous programming in JavaScript](https://medium.com/@ajmeyghani/async-javascript-a-pocket-reference-2bb16ac40d21)
* [W3Schools: Console Object](https://www.w3schools.com/jsref/obj_console.asp)
* [Boost your JavaScript Debugging Skills With These Console Tricks](https://medium.com/better-programming/boost-your-javascript-debugging-skills-with-these-console-tricks-ab984c70298a)




### Wordpress

* [Understrap theme](https://understrap.com/) - [documentation](https://understrap.github.io/), [code](https://github.com/understrap/understrap), [demo](https://understrap.com/understrap/), and [showcase](https://github.com/understrap/understrap/issues/208)



### Leaflet Maps

* [Leaflet: Make a web map!](https://maptimeboston.github.io/leaflet-intro/)
* [Web Map Workshop](http://duspviz.mit.edu/web-map-workshop/)



### Data

* [jsonlint.com](https://jsonlint.com/) - The JSON validator
* [geojson.io](http://geojson.io/) - The missing GUI for GEOJSON files


### Graphics

* [SVGOMG](https://jakearchibald.github.io/svgomg/) - The missing GUI for SVG files
* [Coolers](https://coolors.co/) - Color scheme generator


### Web Servers and Architectures

* [Web Architecture 101](https://engineering.videoblocks.com/web-architecture-101-a3224e126947)





## Software and Packages


### Atom

Download [Atom](https://atom.io/) and install the following packages:

* [atom-beautify](https://atom.io/packages/atom-beautify) - Beautify HTML, CSS, JavaScript, PHP, Python, and more!
* [emmet](https://atom.io/packages/emmet) - The essential tool for web developers
* [file-icons](https://atom.io/packages/file-icons) - Assign file extension icons and colours for improved visual grepping
* [pigments](https://atom.io/packages/pigments) - A package to display colors in project and files
* [remote-ftp](https://atom.io/packages/remote-ftp) - Enable browsing remote SFTP just like the built-in Tree View 
* [linter](https://atom.io/packages/linter) - A [linter](https://en.wikipedia.org/wiki/Lint_(software)) for Atom 
* [linter-jshint](https://atom.io/packages/linter-jshint) - Linter plugin for JavaScript, using jshint







## Testing and Validation


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

### Website, Domain, and Server Tests

* [CDN Planet](https://www.cdnplanet.com/) - A good check for server response time / CDN 
* [Pingdom](https://tools.pingdom.com/) - Also good for checking server and website performance
* [GTMetrix](https://gtmetrix.com/) - Another measurement for server and website performance
* [WebPageTest](https://www.webpagetest.org/)
* [Wordpress Checkup](https://premium.wpmudev.org/wp-checkup/)
* [ICANN WHOIS](https://whois.icann.org/en) - Lookup domain registration and nameservers
* [Whats My DNS?](https://www.whatsmydns.net/) - Global DNS Propagation Checker
* [MX Lookup](https://mxtoolbox.com/MXLookup.aspx) - Check the health of email on your server








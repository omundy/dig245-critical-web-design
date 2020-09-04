
![game controller](reference-sheets/img/network-black-512sq-150x150.png)


# Critical Web Design

Tutorials, demos, and resources for [DIG 245 Critical Web Design](https://owenmundy.com/teaching/critical-web-design/)




## Tutorials, Tools, and References


### [HTML & CSS](#ref-html-css)

Tutorials and references from the Critical Web Design course content

- [HTML](reference-sheets/html.md) and [CSS](reference-sheets/css.md), [Javascript](reference-sheets/javascript.md) reference sheets
- [HTML/CSS slides](https://docs.google.com/presentation/d/1x5yJObVVAyUj2uUV3VKqxvY1L2ucPrwKDUFKmZ2elUw/edit)
- [Intro & Technical Reference (concepts, software, etc.)](https://docs.google.com/presentation/d/1OVCMHMfB_0gYgTtv2iMK_aCktJtCSRp1aRvH3T1W0JU/edit?usp=sharing)

Popular tutorials and guides. You should **still look for other ones that you might like better**!

- W3Schools [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/)
- Shay Howe's *[Learn to Code HTML & CSS](https://learn.shayhowe.com/)*
- Oliver James' *[HTML & CSS Is Hard (But Doesn't Have To Be)](https://www.internetingishard.com/html-and-css/)*
- Jessica Hische and Russ Maschmeyer's *[Don't Fear The Internet](http://www.dontfeartheinternet.com/)*

Technical references are the most accurate and comprehensive way to understand a tag or property. Learning to read these is its own (very valuable) skill.

- W3Schools [HTML Element](https://www.w3schools.com/tags/default.asp) and [CSS](https://www.w3schools.com/cssref/default.asp)
- MDN's [HTML: Hypertext Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
- MDN's [CSS: Cascading Stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTMLReference.io](https://htmlreference.io/)
- [CSSReference.io](https://cssreference.io/)




### Version Control and Collaboration

* [Github Git Cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
* [Github Git Cheatsheet (education version)](https://education.github.com/git-cheat-sheet-education.pdf)
* [Github Markdown Cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)


### Javascript

* Critical Web Design Reference Sheets: [Javascript](reference-sheets/javascript.md)
* W3Schools [Javascript](https://www.w3schools.com/jsref/default.asp) reference
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


### Make a bookmarklet

1. Copy a JS code sample (e.g. below...)
```
javascript:alert("hello world!")
```
2. Paste it into [this form](http://ted.mielczarek.org/code/mozilla/bookmarklet.html)
3. Change the name to something relevant, like `hello`
4. Click "Crunch"
5. Drag the bookmarklet link to your bookmark bar



### HTML and CSS validator bookmarklet
Use the code below and the above bookmarklet instructions
```javascript
var loc = document.location;
var css = window.open("http://jigsaw.w3.org/css-validator/validator?profile=css3&warning=0&uri=" + loc, "css");
var html = window.open("http://validator.w3.org/check?verbose=1&uri=" + loc, "html");
```

### Last modified bookmarklet
Use the code below and the above bookmarklet instructions
```
javascript:alert(document.lastModified)
```




### Website, Domain, and Server Tests

Website health and performance
* [Google Speed](https://developers.google.com/speed/pagespeed/insights/)
* [Pingdom](https://tools.pingdom.com/) - Check server and website performance
* [GTMetrix](https://gtmetrix.com/) - Another measurement for server and website performance
* [WebPageTest](https://www.webpagetest.org/)
* [Wordpress Checkup](https://premium.wpmudev.org/wp-checkup/)

Domain name, email, and SSL checks
* [ICANN WHOIS](https://whois.icann.org/en) - Lookup domain registration and nameservers
* [DNS Checker](https://dnschecker.org/) - Global DNS Propagation Checker
* [MX Lookup](https://mxtoolbox.com/MXLookup.aspx) - Check the health of email on your server
* [HTTP Header Checker](https://tools.keycdn.com/curl) - Analyze HTTP response headers
* [HTTP/2 Test](https://tools.keycdn.com/http2-test) - Verify HTTP/2 support
* [SSL Checker](https://www.sslshopper.com/ssl-checker.html) - Diagnose problems with your SSL certificate installation

Content, meta content, and errors
* [Google Webmaster Tools](https://www.google.com/webmasters/tools) - Check your sitemap, robots file, and 404s 
* [Open Graph Checker](http://opengraphcheck.com) - Do you have meta information for the open graph? 
* [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Evaluate your [Open Graph](https://ogp.me/) FB sharing tags
* [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Evaluate your Twitter sharing tags
* [Google Rich Results Test](https://search.google.com/test/rich-results) - To examine your [schema.org tags](https://schema.org/docs/gs.html) 
- [http.cat](https://http.cat/) - An essential visual reference for HTTP response codes



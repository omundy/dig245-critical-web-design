
![network diagram](assets/img/logos/network-black-512sq-150x150.png)


# DIG 245 - Critical Web Design

Tutorials, demos, and resources for DIG 245 Critical Web Design






## Assignments, Milestones, and Sample code

- Assignments: See class assignment document
- Milestones:
	- [git-milestones](https://github.com/omundy/learn-git-milestones)
	- [html-css-milestones](https://github.com/omundy/learn-html-css-milestones)
	- [js-milestones](https://github.com/omundy/learn-js-milestones)
- Samples: [/demos](demos/)



## Tutorials, Tools, and References


### HTML & CSS

Tutorials and references from the Critical Web Design course content

- [HTML](reference-sheets/html.md), [CSS](reference-sheets/css.md), and [Javascript](reference-sheets/javascript.md) reference sheets




### Version Control and Collaboration

- DIG 245 [Git & Github Desktop slides](https://docs.google.com/presentation/d/1vtK6LoqwF4rQQZZy-ovuEgsYUwwMRXsqDVMOjAPSBt0/edit)
- [Github Cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Github Markdown Cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)





### Javascript

Tutorials and references from the Critical Web Design course content

- [Javascript](reference-sheets/javascript.md) reference sheets
- [Javascript slides](https://docs.google.com/presentation/d/1mTMY_jT3nVvrdE2JNrFNVsRBjnFFf90LhKB3W-2w3Fg/edit)
- [Intro & Technical Reference (concepts, software, etc.)](https://docs.google.com/presentation/d/1OVCMHMfB_0gYgTtv2iMK_aCktJtCSRp1aRvH3T1W0JU/edit?usp=sharing)

Technical references

* W3Schools [Javascript](https://www.w3schools.com/jsref/default.asp) reference
* [Async JavaScript, a Pocket Reference: Learn asynchronous programming in JavaScript](https://medium.com/@ajmeyghani/async-javascript-a-pocket-reference-2bb16ac40d21)
* [W3Schools: Console Object](https://www.w3schools.com/jsref/obj_console.asp)
* [Boost your JavaScript Debugging Skills With These Console Tricks](https://medium.com/better-programming/boost-your-javascript-debugging-skills-with-these-console-tricks-ab984c70298a)


Common JS problems

- [Swap images with Javascript / jQuery](https://codepen.io/owenmundy/pen/OJRWQoY)



## Frameworks, Libraries, and other Tools


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






## Setup your development environment

[topics-development-environment](topics-development-environment.md)




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
* [http.cat](https://http.cat/) - An essential visual reference for HTTP response codes

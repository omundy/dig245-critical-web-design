
[<](../../README.md)

<img width="375" src="../../assets/img/banner-web-development.png">

# Testing and Validation








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

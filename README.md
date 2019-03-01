# Critical Web Design

Tutorials, demos, and resources for [DIG 245 Critical Web Design](https://owenmundy.com/teaching/critical-web-design/)




## References

* [CWD Technical References](https://docs.google.com/presentation/d/1OVCMHMfB_0gYgTtv2iMK_aCktJtCSRp1aRvH3T1W0JU/edit?usp=sharing)
* W3Schools [HTML](https://www.w3schools.com/tags/default.asp), [CSS](https://www.w3schools.com/cssref/default.asp), and [Javascript](https://www.w3schools.com/jsref/default.asp) references



## Resources

### Wordpress

* [Understrap theme](https://understrap.com/) - [documentation](https://understrap.github.io/), [code](https://github.com/understrap/understrap), [demo](https://understrap.com/understrap/), and [showcase](https://github.com/understrap/understrap/issues/208)


## Tools and Tips

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
* [Wordpress Checkup](https://premium.wpmudev.org/wp-checkup/ )

* [ICANN WHOIS](https://whois.icann.org/en) - Lookup domain registration and nameservers
* [Whats My DNS?](https://www.whatsmydns.net/) - Global DNS Propagation Checker
* [MX Lookup](https://mxtoolbox.com/MXLookup.aspx) - Check the health of email on your server





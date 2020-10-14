"use strict";

// include the HTTP module
var http = require('http');

// create a server object, write response
http.createServer(function (req, res) {
    res.write('Hello from ' + req.url);
    console.log(req.headers);
    res.end();
}).listen(3000);

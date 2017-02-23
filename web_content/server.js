var http = require('http');
var fs = require('fs');
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        if (request.url.indexOf('.html') != -1) { //req.url has the pathname, check if it conatins '.html'
            fs.readFile(__dirname + pathname, function(err, data) {
                if (err) console.log(err);
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write(data);
                response.end();
            });
        }

        if (request.url.indexOf('.css') != -1) { //req.url has the pathname, check if it conatins '.css'
            fs.readFile(__dirname + pathname, function(err, data) {
                if (err) console.log(err);
                response.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                response.write(data);
                response.end();
            });
        }
        
        if (request.url.indexOf('.js') != -1) { //req.url has the pathname, check if it conatins '.js'
            fs.readFile(__dirname + pathname, function(err, data) {
                if (err) console.log(err);
                response.writeHead(200, {
                    'Content-Type': 'text/javascript'
                });
                response.write(data);
                response.end();
            });
        }
        
        if (request.url.indexOf('.png') != -1) { //req.url has the pathname, check if it conatins '.js'
            fs.readFile(__dirname + pathname, function(err, data) {
                if (err) console.log(err);
                response.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                response.write(data);
                response.end();
            });
        }
    };
    
    http.createServer(onRequest).listen(8888);
    console.log('Server running at http://127.0.0.1:8888/');
    
}

exports.start = start;

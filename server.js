var http = require('http');
var fs = require('fs');
var url = require('url');

// Create an HTTP Server
http.createServer(function (request, response) {
    
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from the file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // Page not found - HTTP Status: 404
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // Page found - HTTP Status: 200
            response.writeHead(200, {'Content-Type': 'text/html'});
            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end();
    });
}).listen(8081);

// Console Message
console.log('Server running at http://127.0.0.1:8081/');
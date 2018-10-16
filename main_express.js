var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// Serve static pages
app.use(express.static('public'));

// Process a GET request for the homepage
app.get('/', function (req, res) {
    console.log('Got a GET request for the homepage')
    res.send('Hello World - GET Request!');
})

// Process a POST request for the homepage
app.post('/', function (req, res) {
    console.log('Got a POST request for the homepage')
    res.send('Hello World - POST Request!');
})

// Process a DELETE request for the /del_user page
app.delete('/del_user', function (req, res) {
    console.log('Got a DELETE request for the /del_user page')
    res.send('Hello World - DELETE Request!');
})

// Process a GET request for the /list_user page
app.get('/list_user', function (req, res) {
    console.log('Got a GET request for the /list_user page')
    res.send('Page Listing');
})

// Process a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log('Got a GET request for the /ab*cd page')
    res.send('Page Pattern Match');
})

// Process a GET request for /get_names_get.html
app.get('/get_names_get.html', function (req, res) {
    res.sendFile(__dirname + "/" + "get_names_get.html");
})

// Process a GET request for /get_names_get
app.get('/get_names_get', function (req, res) {
    res.sendFile(__dirname + "/" + "get_names_get.html");
})

// Process a GET request for /get_names_post.html
app.get('/get_names_post.html', function (req, res) {
    res.sendFile(__dirname + "/" + "get_names_post.html");
})

// Process a GET request for /get_names_post
app.get('/get_names_post', function (req, res) {
    res.sendFile(__dirname + "/" + "get_names_post.html");
})

// Proceses a GET Form Request for /process_get
app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

// Proceses a POST Form Request for /process_post
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('App is listening at http://' + host + ':' + port)
})
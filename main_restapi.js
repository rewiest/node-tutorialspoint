var express = require('express');
var app = express();
var fs = require('fs');

// List users via /listUsers
app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
        console.log(data);
        res.end(data);
    });
})

// Display user information for specified user ID on URI
app.get('/:id', function (req, res) {
    // First read existing users
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

// Define a new user
var user = {
    "user4": {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
};

// Add new user via /addUser 
app.post('/addUser', function (req, res) {
    // First read existing users
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


// Define server and port
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://" + host + ":" + port);
})
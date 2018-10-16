var express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(express.static('public'));

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(multer({dest: '/tmp/'}));


// Process a GET request for /file_upload_page.html or /file_upload_page
app.get('/file_upload_page.html', function (req, res) {
    res.sendFile(__dirname + "/" + "file_upload_page.html");
})
app.get('/file_upload_page', function (req, res) {
    res.sendFile(__dirname + "/" + "file_upload_page.html");
})

// Process a POST Form Request for /file_upload
app.post('/process_post', urlencodedParser, function (req, res) {
    console.log("made it here...");
    console.log(req.files);
    console.log('past req.files line');
    console.log(req.body.comment);
    console.log('past req.body.comment line');
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;

    fs.readFile(req.files.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files.file.name
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('App is listening at http://' + host + ':' + port)
})
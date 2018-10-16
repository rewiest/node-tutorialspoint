var fs = require('fs');

console.log("Going to delete directory /tmp/test");
fs.rmdir('/tmp/test', function (err) {
    if (err) {
        console.error(err);
    }
    console.log("Directory deleted!");

    console.log("Going to read directory /tmp")
    fs.readdir('/tmp', function (err, files) {
        if (err) {
            console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
});
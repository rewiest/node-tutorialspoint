var fs = require('fs');

console.log("Going to read directory /tmp");
fs.readdir('/tmp', function (err, files) {
    if (err) {
        console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});
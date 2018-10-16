var fs = require('fs');

console.log("Going to create a directory /tmp/test");
fs.mkdir('/tmp/test', function(err) {
    if (err) {
        console.error(err);
    }
    console.log("Directory created successfully!");
});
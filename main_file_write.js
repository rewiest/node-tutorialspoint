var fs = require('fs');

console.log("Going to write to a file");
fs.writeFile('write_file.txt', 'Simply Easy Learning!', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('write_file.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
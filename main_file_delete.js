var fs = require('fs');

console.log("Going to delete an existing file");
fs.unlink('delete.txt', function(err) {
    if (err) {
        console.error(err);
    }
    console.log("File deleted successfully!");
});
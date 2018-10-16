var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to output_compress.txt
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('output_compress.txt'));

console.log("File Compressed");    
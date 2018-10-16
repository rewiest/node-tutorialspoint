var fs = require('fs');
var zlib = require('zlib');

// Decompress the file output_compress.txt to output_decompress.txt
fs.createReadStream('output_compress.txt')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output_decompress.txt'));

console.log("File Decompressed");    
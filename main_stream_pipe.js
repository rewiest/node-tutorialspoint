var fs = require('fs');

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output_pipe.txt');

// Pipe the read and write operations
// Read input.txt and write data to output_pipe.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
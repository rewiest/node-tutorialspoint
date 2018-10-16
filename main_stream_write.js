var fs = require('fs');
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output_write.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream event --> finish and error
writerStream.on('finish', function() {
    console.log("Write Completed");
});

writerStream.on('error', function() {
    console.log(err.stack);
});

console.log("Program Ended");
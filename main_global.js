// Display current filename
console.log(__filename);

// Display current directory
console.log(__dirname);

// Display Hello World after timeout of 5 seconds
function printHello() {
    console.log( "Hello, World!");
 }
 // Now call above function after 5 seconds
 setTimeout(printHello, 5000);
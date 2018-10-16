var os = require('os');

// OS Type
console.log('type : ' + os.type());

// OS Platform
console.log('type : ' + os.platform());

// OS Endianness
console.log('type : ' + os.endianness());

// Total System Memory
console.log('type : ' + os.totalmem() + " bytes.");

// Total Free Memory
console.log('type : ' + os.freemem() + " bytes.");
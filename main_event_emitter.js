var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener 1
var listener1 = function listener1() {
    console.log('Listener1 Executed');
}

// Listener 2
var listener2 = function listener2() {
    console.log('Listener2 Executed');
}

// Bind the connection event to Listener 1 function
eventEmitter.on('connection', listener1);

// Bind the connection event to Listener 2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of Listener 1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 will not listen now");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended");
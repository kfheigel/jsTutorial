const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmittter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmittter();

// add listener 
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);

const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Even listener
myEmitter.on("event", () => console.log("event fired"));

//Init event
myEmitter.emit("event");

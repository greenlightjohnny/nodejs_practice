const os = require("os");

// Platform
console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());

console.log(os.freemem());

console.group(os.totalmem());

console.log(os.homedir());

console.log(os.uptime());

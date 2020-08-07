const os = require("os");

// show the platform of the system
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());

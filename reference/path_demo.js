const path = require("path");

//Basic file name
console.log(path.basename(__filename));

//Direcotor name
console.log(path.dirname(__filename));

//file extension =>.js
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

//Concatenate paths, join more paths
console.log(path.join(__dirname, "test", "hello.html"));

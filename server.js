const http = require("http");
// a module of node
const server = http.createServer(() => {
  console.log("I hear you");
});
server.listen(3000);

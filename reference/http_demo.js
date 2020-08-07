const http = require("http");

// Create server object
http
  .createServer((req, res) => {
    // write response
    res.write(`hello world`);
    res.end();
  })
  .listen(5000, () => console.log("sever running"));
// to let it run, it needs to listen to a port

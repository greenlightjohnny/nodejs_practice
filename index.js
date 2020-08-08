const http = require("http");
const path = require("path");
const fs = require("fs");

//Creating the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>HOME<h1>");
  }
});

/// First checks for the port number in the environment variable, if none is found, uses port 5000.
const PORT = process.env.PORT || 5000;

/// Tell the server where to listen, set to the PORT variable
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener:", data));

// logger.log("HEyY you");

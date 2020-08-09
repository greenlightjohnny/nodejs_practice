const http = require("http");
const path = require("path");
const fs = require("fs");

//Creating the server
const server = http.createServer((req, res) => {
  ///Check to see if the / homepage was where the request came from
  //   if (req.url === "/") {
  //     ///readFile asynchronously reads the entire contents of a file. Takes in a file path, options, and a callback function. The callback function takes in (err, data). Err is an error, and data is the contents of the file. Does not have to be called data, in this case it is labeled content
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //   ////Check to see if the request was from the about page
  //   if (req.url === "/about") {
  //     console.log("%%%%%%%%%%%");
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //   if (req.url === "/api/user") {
  //     const users = [
  //       { name: "bob", age: 40 },
  //       { name: "John", age: 30 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  console.log(
    "$$$$$$$$",

    req.url
  );
  // Extension of file
  let extname = path.extname(filePath);
  console.log("$$$$ext", extname);

  // Initial contact type
  let contentType = "text/html";

  // Change contact type based on the ext name from the file path
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  /// Read File
  fs.readFile(filePath, (err, content) => {
    console.log("##filecont", filePath);
    if (err) {
      if ((err.code = "EN0ENT")) {
        //// page not found, error that EN0NET means
        console.log("%%% really not found?");
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        /// Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

/// First checks for the port number in the environment variable, if none is found, uses port 5000.
const PORT = process.env.PORT || 5000;

/// Tell the server where to listen, set to the PORT variable
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener:", data));

// logger.log("HEyY you");

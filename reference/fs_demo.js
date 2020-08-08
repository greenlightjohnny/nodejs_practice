const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });
//fs.mkdir takes in the file name, options, and a callback function.

//Create and write to file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Helloooo", (err) => {
  if (err) throw err;
  console.log("File written to...");
});

const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });
//fs.mkdir takes in the file name, options, and a callback function.

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Helloooo2222",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
  }
);

// Create and append to file
fs.appendFile(
  path.join(__dirname, "/test", "hello2.txt"),
  "Helloooo",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
    fs.writeFile(
      path.join(__dirname, "/test", "hello2.txt"),
      "again",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
);

//Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello7.txt"),
  (err) => {
    if (err) throw err;
    console.log("##", "File renamed");
  }
);

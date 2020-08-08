const path = require("path");

// Base file name
console.log(__filename);
/// returns /home/lost/showcase/nodepractice/reference/path_demo.js
console.log(path.basename(__filename));
// Returns path_demo.js

// Directory name
console.log(path.dirname(__filename));
///

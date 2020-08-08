const path = require("path");

// Base file name
console.log(__filename);
/// returns /home/lost/showcase/nodepractice/reference/path_demo.js
console.log(path.basename(__filename));
// Returns path_demo.js

// Directory name
console.log(path.dirname(__filename));
/// Returns /home/lost/showcase/nodepractice/reference

// File extension
console.log(path.extname(__filename));
// Returns .js

// Create path object
console.log(path.parse(__filename));
// Returns an object:
// {
//   root: '/',
//   dir: '/home/lost/showcase/nodepractice/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// Access parse object
console.log(path.parse(__filename).base);
// Returns path_demo.js

// Concatenate paths

console.log(path.join(__dirname, "test", "hello.html"));
// Returns /home/lost/showcase/nodepractice/reference/test/hello.html

const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
//Returns http://mywebsite.com/hello.html?id=100&status=active

//Host (root domain)
console.log(myUrl.host);
// Returns mywebsite.com

// Hostname
console.log(myUrl.hostname);
//Returns mywebsite.com, does not get port
//Different because it does not include a port if one was used

//Pathname
console.log(myUrl.pathname);
// Returns /hello.html

console.log(myUrl.search);
// Returns ?id=100&status=active

// Parems object
console.log(myUrl.searchParams);
// Returns URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append("abc", 123);
console.log(myUrl.searchParams);
// Returns URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// Returns

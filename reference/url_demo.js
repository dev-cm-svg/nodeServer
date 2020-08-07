const url = require("url");

const myUrl = new URL("http://website.com/hello.html?id=100&status=active");

//the whole url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root domain)
console.log(myUrl.host);
// host name doesn't get port
console.log(myUrl.hostname);

// path name => the actual file(hello.html)
console.log(myUrl.pathname);

// query
console.log(myUrl.search); //after ?
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name},${value}`);
});

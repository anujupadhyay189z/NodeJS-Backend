const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, Welcome to Node.js!");
  res.json("{message: my Api is connect}");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
console.log("Hello World");

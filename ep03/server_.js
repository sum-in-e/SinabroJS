import http from "http";

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  //   if (req.url === "/users" && req.method === "GET") {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "application/json");
  //     res.end(JSON.stringify({ name: "John Doe" }));
  //   }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

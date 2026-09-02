const http = require("http");

// In-memory quotes list - loaded once when the module starts, and
// shared by every request this server handles for as long as the
// process keeps running.
let quotes = ["Node.js runs JavaScript outside the browser."];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/quotes") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(quotes));
    return;
  }

  if (req.method === "POST" && req.url === "/quotes") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      quotes.push(JSON.parse(body).quote);
      res.writeHead(201);
      res.end("Saved");
    });

    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

module.exports = server;

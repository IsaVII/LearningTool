const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });
const clients = new Set();

wss.on("connection", (socket) => {
  clients.add(socket);
  console.log(`Client joined - ${clients.size} connected`);

  socket.on("message", (raw) => {
    const message = JSON.parse(raw);

    // Broadcast to every other connected client
    for (const client of clients) {
      if (client !== socket && client.readyState === client.OPEN) {
        client.send(JSON.stringify(message));
      }
    }
  });

  socket.on("close", () => {
    clients.delete(socket);
    console.log(`Client left - ${clients.size} connected`);
  });
});

// --- Browser client ---
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
  socket.send(JSON.stringify({ user: "Isa", text: "hello!" }));
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log(`${message.user}: ${message.text}`);
};

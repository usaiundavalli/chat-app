const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("update", username + " joined the conversation");
  });

  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + " left the conversation");
  });

  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });
});

server.listen(3000, function () {
  console.log("Listening on *:3000");
});

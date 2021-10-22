const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Run when client connects
io.on("connection", (socket) => {
  console.log("New WS Connection...");

  socket.emit("message", "A user has joined the chat"); //to single client

  //Broadcast when a user connects
  socket.broadcast.emit(); //to all clients except the one who is connecting
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Example app running on ${PORT}`));

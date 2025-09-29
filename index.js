const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

//stor socket.id-> username
let users = {};
let usernameToSocket = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("User is connected:", socket.id);
  socket.on("user joined", (username) => {
    // fallback if user cancels prompt
    if (!username) username = "Anonymous";
    socket.username = username; //save username on socket
    users[socket.id] = username;
    //udate the selected socket id to private chat
    usernameToSocket[username] = socket.id;

    io.emit("system message", `${username} joined the chat`);

    //send update user list
    io.emit("online users", Object.values(users));
  });

  // server--brodcasting typing
  socket.on("typing", (username) => {
    socket.broadcast.emit("typing", username);
  });

  // when typing is stop
  socket.on("stop typing", (username) => {
    socket.broadcast.emit("stop typing", username);
  });

  socket.on("chat message", (msg) => {
    console.log("Message:", `${msg.user}:${msg.text}`);
    io.emit("chat message", msg);
  });

  socket.on("private message", ({ to, from, text }) => {
    const targetSocketId = usernameToSocket[to];
    if (targetSocketId) {
      io.to(targetSocketId).emit("private message", { from, text });
    }
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      io.emit("system message", `${socket.username} left the chat`);
    }
    delete users[socket.id];

    //update user list
    io.emit("online users", Object.values(users));
    console.log("user is disconnect :", socket.id);
  });
});
server.listen(4000, () => {
  console.log("server running ");
});

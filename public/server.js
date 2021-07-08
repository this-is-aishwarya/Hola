const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);

var io = require('socket.io')(server,  {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});
const { ExpressPeerServer } = require('peer');
const port = process.env.PORT || "8000";

let connections = [];

io.on("connect", (socket) => {
  connections.push(socket);
  console.log(`${socket.id} has connected`);

  socket.on("draw", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
        con.emit("ondraw", { x: data.x, y: data.y });
      }
    });
  });

  socket.on("down", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
        con.emit("ondown", { x: data.x, y: data.y });
      }
    });
  });

  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} is disconnected`);
    connections = connections.filter((con) => con.id !== socket.id);
  });
});

const peerServer = ExpressPeerServer(server, {
    proxied: true,
    debug: true,
    path: '/myapp',
    ssl: {}
});


app.use(peerServer,  {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});

app.use(express.static(path.join(__dirname)));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
    response.header('Access-Control-Allow-Origin', "http://localhost:8000");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

});

server.listen(port);
console.log('Listening on: ' + port);
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const cors = require("cors");

// Define event handlers
// Server-side event handlers
io.on("connection", (socket) => {
  console.log("A user connected");

  // Join a chat room based on the attendee ID
  socket.on("join", (roomId) => {
    socket.join(roomId);
    console.log(`User joined the chat room: ${roomId}`);
  });

  socket.on("message", (data) => {
    // Extract the recipient ID from the message
    const { recipientId, message } = data;

    // Broadcast the message to the recipient's chat room
    socket.to(recipientId).emit("message", data);
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

// Start the server
const port = 5000;
httpServer.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

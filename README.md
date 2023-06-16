# WebSocket Server

This repository contains the code for a WebSocket server built with Node.js and Socket.IO. The server enables real-time communication between clients and servers, allowing for instant data exchange and seamless updates.

## Features

- Bidirectional communication: The WebSocket server supports bidirectional communication, enabling real-time updates and notifications between clients and servers.
- Chat room functionality: Users can join specific chat rooms based on their attendee ID, facilitating private or group conversations.
- Message broadcasting: Messages sent by clients are broadcasted to the intended recipients in their respective chat rooms.
- Scalable architecture: The server is designed to handle a large number of concurrent connections, ensuring optimal performance and reliability.
- Cross-origin resource sharing (CORS): The server is configured with CORS to allow requests from specified origins.
- Easy integration: The server is built using Express.js and Socket.IO, making it easy to integrate into existing Node.js applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/websocket-server.git
   ```

2. Install the dependencies:

   ```bash
   cd websocket-server
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start listening on port 5000 by default.

2. Connect clients to the WebSocket server using Socket.IO.

   Example client-side code:

   ```javascript
   const socket = io("http://localhost:5000");

   // Join a chat room
   socket.emit("join", roomId);

   // Send a message
   socket.emit("message", {
     recipientId: recipientId,
     message: "Hello, World!",
   });

   // Receive a message
   socket.on("message", (data) => {
     console.log(data);
   });
   ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
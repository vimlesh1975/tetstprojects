const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle incoming data
  socket.on('data', (data) => {
    const message = data.toString('utf8');
console.log(message)
    // Check if the message is a heartbeat
    if (message.includes('</heartbeat>')) {
      console.log('Received heartbeat message');
    }
  });

  // Handle disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start listening on port 10540
server.listen(10540, () => {
  console.log('Server listening on port 10540');
});

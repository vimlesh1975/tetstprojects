const net = require('net');

// Create a TCP socket client
const mosClient = new net.Socket();

// Connect to the MOS device
mosClient.connect({ port: 11000 }, () => {
  console.log('Connected to MOS device');

  // Send a heartbeat message
  const heartbeatXml = `
    <mos>
      <mosID>MOSDEVICEID</mosID>
      <ncsID>NCSID</ncsID>
      <messageID>333</messageID>
      <heartbeat>
        <time>${new Date().toString('utf8')}</time>
      </heartbeat>
    </mos>
  `;
  mosClient.write(heartbeatXml);
});

// Handle errors
mosClient.on('error', (err) => {
  console.error('Socket error:', err);
});

// Handle data received
mosClient.on('data', (data) => {
  console.log('Received data:', data.toString());
});

// Handle socket close
mosClient.on('close', () => {
  console.log('Connection closed');
});

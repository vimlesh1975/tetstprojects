const { MosDevice, MosConnection, ConnectionConfig, MosModel } = require('@mos-connection/connector')
const mosClient = new MosConnection({
  mosID: 'my-mos-client',
  acceptsConnections: true,
  profiles: {
    '0': true,
    '1': true,
    '2': true,
    '4': true
  },
  openRelay: true,
  debug: true
})

mosClient.on('message', (msg) => {
  console.log(msg)
})

mosClient.onConnection((mosdevice) => {
  console.log('MOS client connected')
  mosdevice.onConnectionChange(() => {
    console.log('MOS device connected')
    mosdevice.onRequestMachineInfo(message => {
      // console.log(`Received MOS message: ${message.toXMLString()}`)
    })
  })
})


mosClient.init()
mosClient.connect({ primary: { id: 'mosID', host: '127.0.0.1' } })
mosClient.emit('message', '5555555')


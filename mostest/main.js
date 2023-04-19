const { MosConnection } = require('@mos-connection/connector')


const mosClient2 = new MosConnection({
  mosID: 'my-mos-client-2',
  acceptsConnections: true,
  profiles: {
    '0': true,
    '1': true,
    '2': true,
    '4': true
  },
  openRelay: true,
  debug: true,
  ports: { lower: 11000, query: 12000, upper: 13000 }
})


mosClient2.onConnection((mosdevice) => {
  console.log('MOS client 2 connected')
  mosdevice.onConnectionChange(() => {
    console.log('MOS device 2 connected', mosdevice)
    mosdevice.onRequestMachineInfo(message => {
      console.log(`Received MOS message: ${message.toXMLString()}`)
    })


  })
})



mosClient2.init()
// mosClient2.connect({ primary: { id: 'mosID', host: '127.0.0.1' ,  ports: { lower: 11000, query: 12000, upper: 13000 }} })
mosClient2.connect({ primary: { id: 'mosID', host: '127.0.0.1' }})


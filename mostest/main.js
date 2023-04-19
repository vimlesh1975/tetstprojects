// MOS Device
const { MosDevice, MosConnection , ConnectionConfig,MosModel } = require('@mos-connection/connector')
const { NCSServerConnection } = require('@mos-connection/connector/dist/connection/NCSServerConnection')
console.log(MosModel.MosMessage)
const mosID = 'my-mos-device'
const mosPort = 10541 // default MOS port
// Set up MOS device
const mosDevice = new MosDevice('my-mos-client', null, {
  acceptsConnectionsFrom: ['*'], // accept connections from all IPs
  acceptsConnections: true, // accept incoming connections
  debug: true, // enable debug mode
  profiles: {
    '0': true,
    '1': true,
    '2': true,
    '4': true
},
  offspecFailover: true, // enable off-spec failover
  openRelay: true, // enable open relay
  ports: {
    mos: 10540, // MOS protocol port
    query: 10541 // MOS query port
  },
  strict: false // allow non-strict MOS objects
})


// listen for commands
mosDevice.onRequestMOSObject((objID, cb) => {
  console.log(`MOS client requested MOS object '${objID}'`)
  // here you can send back the requested MOS object
  const mosObj = {}
  cb(mosObj)
})

// MOS Client
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
const mosDeviceIP = '127.0.0.1' // IP address of MOS device
mosClient.init()

setTimeout(() => {
mosClient.connect({ primary: { id: 'mosID', host: mosDeviceIP } })
}, 2000);

// send a request for a MOS object
const mosObjID = 'my-mos-object'

// console.log(mosClient)
mosDevice.primaryHost='127.0.0.1'
mosDevice.connect()

mosDevice.onConnectionChange(() => {
  console.log('MOS device connected')
})

mosClient.onConnection((mosdevice) => {
  console.log('MOS client connected', mosdevice.idPrimary)
  const { MosMessage } = MosModel;
  

  const mosConfig = {
    primary: {
      id: 'my-mos-device',
      host: '127.0.0.1',
      port: 10541,
      acceptMessages: [
        'ROReq',
        'ROStoryReq',
        'ROListAll',
        'ROStoryList',
        'MachInfoReq',
        'ReqMachInfo',
        'ReqMosSchema',
        'HeartBeatReq'
      ]
    }
  }
  
  // create a MosDevice instance
  const mosDevice = new MosDevice(mosConfig)
  
  // connect to the MOS device
  mosDevice.connect()
  
  // prepare a MOS message
  const message = new MosMessage('upper', false)

  message.mosID = 'my-mos-client'
  message.ncsID = 'my-mos-client'
  message.prepare()
  
  // send the MOS message
  mosDevice.sendMOSObject(message).then(() => {
    console.log('MOS message sent successfully')
  }).catch((err) => {
    console.log(`Error sending MOS message: ${err}`)
  })
  
  
})

const mosObj = {
  mosID: mosObjID,
  objSlug: 'some-slug',
  objGroup: 'TEMPLATE',
  mosAbstract: 'Some template description',
  mosSchema: 'http://my.mos.server/schemas/template',
  mosPayload: '<template><data>vimlesh</data></template>'
}




// Start listening for connections on the specified port
setTimeout(() => {
}, 4000);

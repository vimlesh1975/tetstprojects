// MOS Device
const { MosDevice, MosConnection } = require('@mos-connection/connector')

const mosID = 'my-mos-device'
const mosDevice = new MosDevice(mosID)

const mosPort = 10541 // default MOS port
mosDevice.connect()

// listen for connection
// mosDevice.onConnect(() => {
//   console.log('MOS client connected')
// })

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
const mosDevicePort = 10541 // MOS port of MOS device
mosClient.init()
mosClient.connect({ primary: { id: mosID, host: mosDeviceIP, port: mosDevicePort } })

// listen for connection
mosClient.onConnection((mosdevice) => {
  console.log('MOS device connected', mosdevice)
})

// send a request for a MOS object
const mosObjID = 'my-mos-object'

console.log(mosClient.getDevices().length)

console.log(mosClient)
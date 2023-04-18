const { MosDevice, MosConnection, ConnectionConfig } = require('@mos-connection/connector')

let mos = new MosConnection(new ConnectionConfig({
	mosID: 'my.mos.application',
	acceptsConnections: true,
	profiles: {
		'0': true,
        '1': true,
        '2': true,
        '4': true
	},
	openRelay: true,
	debug: false
}))
mos.onConnection((device) => { // called whenever there is a new connection to a mos-device
	if (device.hasConnection) { // true if we can send messages to the mos-server
	    device.getMachineInfo().then((lm) => {
			console.log('Machineinfo', lm)
		})
	}
	// Setup callbacks to pipe data:
	device.onRequestMachineInfo(() => {})
	device.onCreateRunningOrder((ro) => {})
	device.onDeleteRunningOrder((RunningOrderID) => {})
	device.onReadyToAir(() => {})
	// ...
})
// console.log(mos)

const aa=new MosDevice('id1','id2',new ConnectionConfig({
	mosID: 'deviceaa',
	acceptsConnections: true,
    isNCS:true,
	profiles: {
		'0': true,
        '1': true,
        '2': true,
        '4': true
	},
	openRelay: true,
	debug: false
})
)
aa.connect()
aa.primaryHost='127.0.0.1'
console.log(aa)

mos.init()
// mos.connect({primary:{id:'id1',host:'127.0.0.1'},secondary:{id:'id2',host:'127.0.0.1'}})

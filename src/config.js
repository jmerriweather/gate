
var serverConfig = function(bs) { return({
	serverProcess: 4,
	hostname: "testServer0",
	
	runDir: "/tmp/gatejs",
// 	libDir: __dirname,
	logDir: "/var/log/gatejs",
// 	configDir: __dirname+'/configs',
	gracefulRam: 80,
	gracefulRamForce: 90,
	
	http: {
		testInterface: {
			type: 'forward',
			port: 8080,
			pipeline: 'pipetest'
		},
		testSSLInterface: {
			type: 'forward',
			ssl: true,
		}
	},
	
	pipeline: {
		pipetest: [
			['store', 'argtest1', 'argtest2'],
			['proxyPass', { mode: 'host', timeout: 10 }]
		],
	}

	
})};

module.exports = serverConfig;



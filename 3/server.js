var config = require('config.json');
var router = require('helpers/router');
var log = require('helpers/logger');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
	var now = new Date();

	router(request, response);

	log(request, now);
});

server.listen(config.server_port, function(){
	console.log('localhost:' + config.server_port);
})
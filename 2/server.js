var http = require('http');
var log = require('logger');
var server = http.createServer();

server.on('request', function(request, response){
	var now = new Date();
	response.statusCode = 200;

	response.write('Hello world!');
	response.end();

	log(request, now);
});

server.listen(80, function(){
	console.log('localhost:80');
})
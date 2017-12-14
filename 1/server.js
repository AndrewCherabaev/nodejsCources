var http = require('http');
var server = http.createServer();

server.on('request', function(request, response){
	response.statusCode = 200;// HTTP status == 200: OK
	response.write('Hello world!');
	response.end();
});

server.listen(80, function(){
	console.log('localhost:80');
})
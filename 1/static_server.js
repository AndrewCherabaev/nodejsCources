var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response){
	var file = fs.createReadStream('server.js');
	file.pipe(response);

	console.log('Static file responded');
});

server.listen(80, function(){
	console.log('localhost:80');
})
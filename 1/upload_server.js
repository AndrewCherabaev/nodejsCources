var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response){
	var file = fs.createWriteStream('output.txt');
	request.pipe(file);

	request.on('end', function(){
		response.end('Success!');
	})
});

server.listen(80, function(){
	console.log('localhost:80');
})
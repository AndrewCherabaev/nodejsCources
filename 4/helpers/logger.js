var fs = require('fs');

module.exports = function(request, response, next) {
	var log = fs.createWriteStream('logs/server.txt', {'flags': 'a'});
	var now = new Date();

	log.write(now + ': ' + request.url);
	log.end('\n');

	console.log(request.url);

	next();
}
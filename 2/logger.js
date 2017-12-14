var fs = require('fs');
var config = require('config.json')

module.exports = function(request, time){
	var log_favicon = config.log_favicon;
	var log = fs.createWriteStream('log.txt', {'flags': 'a'});
	var now = new Date();
	if (log_favicon || request.url !== '/favicon.ico') {
		log.write(time + ' : localhost:80' + request.url + ' : responded in ' + (now - time) + 'ms');
		log.end('\n');

		console.log(request.url + ' : responded in ' + (now - time) + ' ms');
	}
};
var fs = require('fs');
var config = require('config.json')

module.exports = function(request, time){
	var now = new Date();
	var log_favicon = config.log_favicon;
	var log_string = request.method + ' localhost:80' + request.url + ' : responded in ' + (now - time) + 'ms';		
	var log = fs.createWriteStream('log.txt', {'flags': 'a'});

	if (log_favicon || request.url != '/favicon.ico') {

		log.write(time + ' ' + log_string);
		log.end('\n');

		console.log(log_string);
	}
};
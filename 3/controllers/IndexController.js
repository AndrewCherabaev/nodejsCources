module.exports = {
	'index': function(request, response) {
		response.writeHead(200);
		response.write('Index page');
		response.end();
	}
}
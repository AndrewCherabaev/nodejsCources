var url = require('url');
var routes = require('routes.json');

module.exports = function(request, response){
	var q = url.parse(request.url, true),
		route = routes[q.pathname],
		controller,
		action;

	if (request.url == '/favicon.ico') {
		response.writeHead(200);
		return response.end();		
	}

	if (route === undefined) {
		response.writeHead(404);
		response.write("Not found");
		return response.end();
	}

	//Контроллер и его метод
	controller = require('controllers/' + route.controller);
	action = route.action;

	//Проверки:
	//Неправильный метод
	if (route.method && route.methods.indexOf(request.method) < 0) {
		response.writeHead(405);
		response.write("Method not allowed!");
		return response.end();
	}

	//Для данного запроса отсутствует обработчик
	if (action == undefined) {
		response.writeHead(421);
		response.write("Bad request: method not exists");
		return response.end();
	}

	//Пропущен аргумент в запросе
	if (route.required && !required_keys(q.query, route.required)) {
		response.writeHead(400);
		response.write("Bad request: missing argument");
		return response.end();
	}

	return controller[action](request, response, q.query);
}

var required_keys = function(query, requires) {
	var keys = Object.keys(query);
	for (var i=0; i<requires.length; i++) {
		if (keys.indexOf(requires[i]) < 0) return false;
	}
	return true;
}
module.exports = {
    'index': function(request, response) {
        response.writeHead(200);
        response.write('<a href="/users/show?id=1">One user</a>');
        response.end();
    },
    'show': function(request, response, query) {
        response.writeHead(200);
        response.write('Showing item number #' + query.id);
        response.end();
    },
    'edit': function(request, response, query) {
        response.setHeader('Content-Type', 'application/json');
        //или
        response.writeHead(200, {'Content-Type': 'application/json'});

        if (request.method == "POST") {
            response.write('"At this time you can\'t edit item number #' + query.id + '"');
        }

        if (request.method == "GET") {
            response.write('"You tried to GET item number #' + query.id + '. Try to POST it on this route"');
        }

        response.end();
    }
}
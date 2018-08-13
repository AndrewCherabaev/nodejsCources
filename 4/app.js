global.config = require('config.json');

var express = require('express');
var logger = require('helpers/logger');
var usersRouter = require('routes/usersRouter');
var postsRouter = require('routes/postsRouter');

var app = express();

app.use(express.static('public'));

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.use(logger);

app.listen(config.server.port, function(){
	console.log('listen on localhost:' + config.server.port);
});
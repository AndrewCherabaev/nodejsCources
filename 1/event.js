var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message){
	console.log('Default error: ' + message);
});

logger.on('custom_error', function(message){
	console.log('Custom error: ' + message);
});

logger.emit('error', 'First error');
logger.emit('custom_error', 'First custom error');
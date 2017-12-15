var usersController = require('controllers/abstractController');

usersController.index = function(req, res, next) {
	res.status(200).send('users list');
	next();
};

usersController.show = function(req, res, next){
	var id = req.params.id;
	res.send('user number ' + id);
	next();
};

module.exports = usersController;
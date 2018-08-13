var postsController = require('controllers/abstractController');

postsController.index = function(req, res, next) {
	res.status(200).send('posts not here');
	next();
};

module.exports = postsController;
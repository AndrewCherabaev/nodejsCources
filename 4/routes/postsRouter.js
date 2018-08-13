var router = require('express').Router();
var postsController = require('controllers/postsController');

router.route('/')
	.get(postsController.index);

module.exports = router;
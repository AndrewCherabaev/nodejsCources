var router = require('express').Router();
var usersController = require('controllers/usersController');

router.route('/')
	.get(usersController.index);
router.route('/:id')
	.get(usersController.show);

module.exports = router;
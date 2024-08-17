const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.route('/all').get(usersController.getUsers)
router.route('/new').put(usersController.createUser);
router.route('/:idUser').get(usersController.getUserById);

module.exports = router;
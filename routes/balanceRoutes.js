const express = require('express');
const balanceController = require('../controllers/balanceController');
const router = express.Router();

router.route('/all').get(balanceController.getBalances);
router.route('/:idUser').get(balanceController.getBalanceByIdUser);

module.exports = router;
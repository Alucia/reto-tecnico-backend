const express = require('express');
const transactionsController = require('../controllers/transactionsController');
const router = express.Router();

router.route('/all').get(transactionsController.getTransactions);
router.route('/:idAccount').get(transactionsController.getTransactionsByIdAccount);

module.exports = router;
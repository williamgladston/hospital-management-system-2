// routes/billingRoutes.js
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.get('/', billingController.getAllBills);
router.get('/new', billingController.renderNewBill);
router.post('/create', billingController.createBill);
router.get('/delete/:id', billingController.deleteBill);

module.exports = router;
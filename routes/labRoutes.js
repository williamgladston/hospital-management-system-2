// routes/labRoutes.js
const express = require('express');
const router = express.Router();
const labController = require('../controllers/labController');

router.get('/', labController.getAllReports);
router.get('/new', labController.renderNewReport);
router.post('/create', labController.createReport);
router.get('/delete/:id', labController.deleteReport);

module.exports = router;
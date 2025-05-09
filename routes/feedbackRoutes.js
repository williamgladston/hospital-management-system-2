// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/', feedbackController.getAllFeedback);
router.get('/new', feedbackController.renderFeedbackForm);
router.post('/create', feedbackController.createFeedback);
router.get('/delete/:id', feedbackController.deleteFeedback);

module.exports = router;
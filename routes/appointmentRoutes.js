// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.getAllAppointments);
router.get('/new', appointmentController.renderNewAppointment);
router.post('/create', appointmentController.createAppointment);
router.get('/delete/:id', appointmentController.deleteAppointment);

module.exports = router;
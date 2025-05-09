// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// All Patients
router.get('/', patientController.getAllPatients);

// New Patient Form (static HTML page or EJS form)
router.get('/new', (req, res) => {
  res.render('addPatient');
});

// Create Patient
router.post('/create', patientController.createPatient);

// Edit Patient Form
router.get('/edit/:id', patientController.getPatientById);

// Update Patient
router.post('/update/:id', patientController.updatePatient);

// Delete Patient
router.get('/delete/:id', patientController.deletePatient);

module.exports = router;
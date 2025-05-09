// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getAllDoctors);
router.get('/new', (req, res) => res.render('addDoctor'));
router.post('/create', doctorController.createDoctor);
router.get('/edit/:id', doctorController.getDoctorById);
router.post('/update/:id', doctorController.updateDoctor);
router.get('/delete/:id', doctorController.deleteDoctor);

module.exports = router;
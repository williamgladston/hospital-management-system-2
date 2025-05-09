// controllers/patientController.js
const Patient = require('../models/patientModel');

exports.getAllPatients = (req, res) => {
  Patient.getAll((err, results) => {
    if (err) throw err;
    res.render('patients', { patients: results });
  });
};

exports.getPatientById = (req, res) => {
  const id = req.params.id;
  Patient.getById(id, (err, result) => {
    if (err) throw err;
    res.render('editPatient', { patient: result[0] });
  });
};

exports.createPatient = (req, res) => {
  const data = req.body;
  Patient.create(data, (err) => {
    if (err) throw err;
    res.redirect('/patients');
  });
};

exports.updatePatient = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Patient.update(id, data, (err) => {
    if (err) throw err;
    res.redirect('/patients');
  });
};

exports.deletePatient = (req, res) => {
  const id = req.params.id;
  Patient.delete(id, (err) => {
    if (err) throw err;
    res.redirect('/patients');
  });
};
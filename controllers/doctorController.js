// controllers/doctorController.js
const Doctor = require('../models/doctorModel');

exports.getAllDoctors = (req, res) => {
  Doctor.getAll((err, results) => {
    if (err) throw err;
    res.render('doctors', { doctors: results });
  });
};

exports.getDoctorById = (req, res) => {
  const id = req.params.id;
  Doctor.getById(id, (err, result) => {
    if (err) throw err;
    res.render('editDoctor', { doctor: result[0] });
  });
};

exports.createDoctor = (req, res) => {
  const data = req.body;
  Doctor.create(data, (err) => {
    if (err) throw err;
    res.redirect('/doctors');
  });
};

exports.updateDoctor = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Doctor.update(id, data, (err) => {
    if (err) throw err;
    res.redirect('/doctors');
  });
};

exports.deleteDoctor = (req, res) => {
  const id = req.params.id;
  Doctor.delete(id, (err) => {
    if (err) throw err;
    res.redirect('/doctors');
  });
};
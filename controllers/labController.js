// controllers/labController.js
const Lab = require('../models/labModel');
const db = require('../config/db');

exports.getAllReports = (req, res) => {
  Lab.getAll((err, reports) => {
    if (err) throw err;
    res.render('labReports', { reports });
  });
};

exports.renderNewReport = (req, res) => {
  db.query('SELECT * FROM patients', (err, patients) => {
    if (err) throw err;
    res.render('addLabReport', { patients });
  });
};

exports.createReport = (req, res) => {
  Lab.create(req.body, (err) => {
    if (err) throw err;
    res.redirect('/lab');
  });
};

exports.deleteReport = (req, res) => {
  Lab.delete(req.params.id, (err) => {
    if (err) throw err;
    res.redirect('/lab');
  });
};

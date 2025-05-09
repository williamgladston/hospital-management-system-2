// controllers/appointmentController.js
const Appointment = require('../models/appointmentModel');
const db = require('../config/db');

exports.getAllAppointments = (req, res) => {
  Appointment.getAll((err, appointments) => {
    if (err) throw err;
    res.render('appointments', { appointments });
  });
};

exports.renderNewAppointment = (req, res) => {
  db.query('SELECT * FROM patients', (err, patients) => {
    if (err) throw err;
    db.query('SELECT * FROM doctors', (err, doctors) => {
      if (err) throw err;
      res.render('addAppointment', { patients, doctors });
    });
  });
};

exports.createAppointment = (req, res) => {
  Appointment.create(req.body, (err) => {
    if (err) throw err;
    res.redirect('/appointments');
  });
};

exports.deleteAppointment = (req, res) => {
  Appointment.delete(req.params.id, (err) => {
    if (err) throw err;
    res.redirect('/appointments');
  });
};
// models/appointmentModel.js
const db = require('../config/db');

const Appointment = {
  getAll: (callback) => {
    const sql = `
      SELECT appointments.*, patients.name AS patient_name, doctors.name AS doctor_name
      FROM appointments
      JOIN patients ON appointments.patient_id = patients.id
      JOIN doctors ON appointments.doctor_id = doctors.id
    `;
    db.query(sql, callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO appointments (patient_id, doctor_id, date, time) VALUES (?, ?, ?, ?)';
    const values = [data.patient_id, data.doctor_id, data.date, data.time];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM appointments WHERE id = ?', [id], callback);
  }
};

module.exports = Appointment;
// models/doctorModel.js
const db = require('../config/db');

const Doctor = {
  getAll: (callback) => {
    db.query('SELECT * FROM doctors', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM doctors WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO doctors (name, specialization, contact, availability) VALUES (?, ?, ?, ?)';
    const values = [data.name, data.specialization, data.contact, data.availability];
    db.query(sql, values, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE doctors SET name = ?, specialization = ?, contact = ?, availability = ? WHERE id = ?';
    const values = [data.name, data.specialization, data.contact, data.availability, id];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM doctors WHERE id = ?', [id], callback);
  }
};

module.exports = Doctor;
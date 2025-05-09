// models/patientModel.js
const db = require('../config/db');

const Patient = {
  getAll: (callback) => {
    db.query('SELECT * FROM patients', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM patients WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO patients (aadhaar_no, name, age, gender, contact, disease) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [data.aadhaar_no, data.name, data.age, data.gender, data.contact, data.disease];
    db.query(sql, values, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE patients SET name = ?, age = ?, gender = ?, contact = ?, disease = ? WHERE id = ?';
    const values = [data.name, data.age, data.gender, data.contact, data.disease, id];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM patients WHERE id = ?', [id], callback);
  }
};

module.exports = Patient;
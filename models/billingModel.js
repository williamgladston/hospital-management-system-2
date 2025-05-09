// models/billingModel.js
const db = require('../config/db');

const Billing = {
  getAll: (callback) => {
    const sql = `
      SELECT billing.*, patients.name AS patient_name
      FROM billing
      JOIN patients ON billing.patient_id = patients.id
    `;
    db.query(sql, callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO billing 
      (patient_id, admission_date, discharge_date, room_charge, lab_charge, medicine_charge, total_amount)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      data.patient_id,
      data.admission_date,
      data.discharge_date,
      data.room_charge,
      data.lab_charge,
      data.medicine_charge,
      data.total_amount
    ];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM billing WHERE id = ?', [id], callback);
  }
};

module.exports = Billing;
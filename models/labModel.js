// models/labModel.js
const db = require('../config/db');

const Lab = {
  getAll: (callback) => {
    const sql = `
      SELECT lab_reports.*, patients.name AS patient_name
      FROM lab_reports
      JOIN patients ON lab_reports.patient_id = patients.id
    `;
    db.query(sql, callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO lab_reports (patient_id, test_name, test_result, report_date)
      VALUES (?, ?, ?, ?)
    `;
    const values = [data.patient_id, data.test_name, data.test_result, data.report_date];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM lab_reports WHERE id = ?', [id], callback);
  }
};

module.exports = Lab;
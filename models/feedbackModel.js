// models/feedbackModel.js
const db = require('../config/db');

const Feedback = {
  getAll: (callback) => {
    db.query('SELECT * FROM feedback ORDER BY id DESC', callback);
  },

  create: (data, callback) => {
    const sql = `INSERT INTO feedback (name, message, created_at) VALUES (?, ?, NOW())`;
    db.query(sql, [data.name, data.message], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM feedback WHERE id = ?', [id], callback);
  }
};

module.exports = Feedback;
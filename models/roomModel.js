// models/roomModel.js
const db = require('../config/db');

const Room = {
  getAll: (callback) => {
    db.query('SELECT * FROM rooms', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM rooms WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO rooms (room_number, type, status) VALUES (?, ?, ?)';
    const values = [data.room_number, data.type, data.status];
    db.query(sql, values, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE rooms SET room_number = ?, type = ?, status = ? WHERE id = ?';
    const values = [data.room_number, data.type, data.status, id];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM rooms WHERE id = ?', [id], callback);
  }
};

module.exports = Room;
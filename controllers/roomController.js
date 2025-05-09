// controllers/roomController.js
const Room = require('../models/roomModel');

exports.getAllRooms = (req, res) => {
  Room.getAll((err, results) => {
    if (err) throw err;
    res.render('rooms', { rooms: results });
  });
};

exports.getRoomById = (req, res) => {
  const id = req.params.id;
  Room.getById(id, (err, result) => {
    if (err) throw err;
    res.render('editRoom', { room: result[0] });
  });
};

exports.createRoom = (req, res) => {
  const data = req.body;
  Room.create(data, (err) => {
    if (err) throw err;
    res.redirect('/rooms');
  });
};

exports.updateRoom = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Room.update(id, data, (err) => {
    if (err) throw err;
    res.redirect('/rooms');
  });
};

exports.deleteRoom = (req, res) => {
  const id = req.params.id;
  Room.delete(id, (err) => {
    if (err) throw err;
    res.redirect('/rooms');
  });
};
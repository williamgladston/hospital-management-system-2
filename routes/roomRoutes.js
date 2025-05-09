// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.getAllRooms);
router.get('/new', (req, res) => res.render('addRoom'));
router.post('/create', roomController.createRoom);
router.get('/edit/:id', roomController.getRoomById);
router.post('/update/:id', roomController.updateRoom);
router.get('/delete/:id', roomController.deleteRoom);

module.exports = router;
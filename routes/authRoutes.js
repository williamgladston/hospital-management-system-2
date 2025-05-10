const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) return res.send('Database error');
      if (results.length > 0) {
        const user = results[0];
        req.session.user = { id: user.id, username: user.username, role: user.role };

        // Redirect based on role
        if (user.role === 'doctor') res.redirect('/doctor');
        else if (user.role === 'receptionist') res.redirect('/reception');
        else if (user.role === 'admin') res.redirect('/');
        else res.send('Unknown role');
      } else {
        res.send('Invalid username or password');
      }
    }
  );
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
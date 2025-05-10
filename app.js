const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Session setup
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));

// --- Hardcoded login credentials ---
const hardcodedUser = {
  username: 'admin',
  password: 'admin123',
  role: 'admin'
};

// --- Auth Middleware ---
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// --- Routes ---

// Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

// Login Post
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === hardcodedUser.username && password === hardcodedUser.password) {
    req.session.user = hardcodedUser;
    res.redirect('/');
  } else {
    res.send('Invalid credentials');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});


// Dashboard (Home)
app.get('/', isAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

// Reception and Doctor dashboards
app.get('/reception', isAuthenticated, (req, res) => {
  res.render('receptionDashboard', { user: req.session.user });
});

app.get('/doctor', isAuthenticated, (req, res) => {
  res.render('doctorDashboard', { user: req.session.user });
});

// --- Other Routes ---

const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const roomRoutes = require('./routes/roomRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const billingRoutes = require('./routes/billingRoutes');
const labRoutes = require('./routes/labRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use('/patients', isAuthenticated, patientRoutes);
app.use('/doctors', isAuthenticated, doctorRoutes);
app.use('/rooms', isAuthenticated, roomRoutes);
app.use('/appointments', isAuthenticated, appointmentRoutes);
app.use('/billing', isAuthenticated, billingRoutes);
app.use('/lab-reports', isAuthenticated, labRoutes);
app.use('/feedback', isAuthenticated, feedbackRoutes);

// --- Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
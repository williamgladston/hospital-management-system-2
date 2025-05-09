const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
// ...more routes

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/rooms', roomRoutes);
// ...more route uses
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/appointments', appointmentRoutes);
const billingRoutes = require('./routes/billingRoutes');
app.use('/billing', billingRoutes);
const labRoutes = require('./routes/labRoutes');
app.use('/lab-reports', labRoutes);
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/feedback', feedbackRoutes);
// Home
app.get('/', (req, res) => res.render('dashboard'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
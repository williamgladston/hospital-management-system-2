const db = require('../config/db'); // Assuming you're using this for database operations

// Controller to fetch all lab reports
exports.getAllReports = (req, res) => {
  db.query('SELECT * FROM lab_reports', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching reports.');
    }
    res.render('labReports', { reports: results });
  });
};

// Controller to render the new report form
exports.renderNewReport = (req, res) => {
  res.render('newLabReport'); // Create this view to show the form
};

// Controller to create a new lab report
exports.createReport = (req, res) => {
  const { patientId, reportDetails } = req.body;
  const query = 'INSERT INTO lab_reports (patient_id, report_details) VALUES (?, ?)';

  db.query(query, [patientId, reportDetails], (err, result) => {
    if (err) {
      return res.status(500).send('Error creating lab report.');
    }
    res.redirect('/lab-reports'); // Redirect to the reports list page
  });
};

// Controller to delete a lab report
exports.deleteReport = (req, res) => {
  const reportId = req.params.id;
  const query = 'DELETE FROM lab_reports WHERE id = ?';

  db.query(query, [reportId], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting report.');
    }
    res.redirect('/lab-reports'); // Redirect to the reports list page
  });
};
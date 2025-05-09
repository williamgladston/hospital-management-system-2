// controllers/feedbackController.js
const Feedback = require('../models/feedbackModel');

exports.getAllFeedback = (req, res) => {
  Feedback.getAll((err, feedbacks) => {
    if (err) throw err;
    res.render('feedbackList', { feedbacks });
  });
};

exports.renderFeedbackForm = (req, res) => {
  res.render('addFeedback');
};

exports.createFeedback = (req, res) => {
  const { name, message } = req.body;
  Feedback.create({ name, message }, (err) => {
    if (err) throw err;
    res.redirect('/feedback');
  });
};

exports.deleteFeedback = (req, res) => {
  Feedback.delete(req.params.id, (err) => {
    if (err) throw err;
    res.redirect('/feedback');
  });
};
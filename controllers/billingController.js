// controllers/billingController.js
const Billing = require('../models/billingModel');
const db = require('../config/db');

exports.getAllBills = (req, res) => {
  Billing.getAll((err, bills) => {
    if (err) throw err;
    res.render('billing', { bills });
  });
};

exports.renderNewBill = (req, res) => {
  db.query('SELECT * FROM patients', (err, patients) => {
    if (err) throw err;
    res.render('addBill', { patients });
  });
};

exports.createBill = (req, res) => {
  const {
    patient_id,
    admission_date,
    discharge_date,
    lab_charge,
    medicine_charge
  } = req.body;

  // Calculate days and room_charge (assume ₹1000/day)
  const date1 = new Date(admission_date);
  const date2 = new Date(discharge_date);
  const stayDays = Math.max(1, (date2 - date1) / (1000 * 60 * 60 * 24));
  const room_charge = stayDays * 1000;

  const total_amount = room_charge + Number(lab_charge) + Number(medicine_charge);

  const billingData = {
    patient_id,
    admission_date,
    discharge_date,
    room_charge,
    lab_charge,
    medicine_charge,
    total_amount
  };

  Billing.create(billingData, (err) => {
    if (err) throw err;
    res.redirect('/billing');
  });
};

exports.deleteBill = (req, res) => {
  Billing.delete(req.params.id, (err) => {
    if (err) throw err;
    res.redirect('/billing');
  });
};
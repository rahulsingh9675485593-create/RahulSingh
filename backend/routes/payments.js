const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Payment = require('../models/Payment');

router.post('/', auth, async (req, res) => {
  try {
    const p = new Payment(req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const list = await Payment.find();
    res.json(list);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
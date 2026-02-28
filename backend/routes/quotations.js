const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Quotation = require('../models/Quotation');

router.post('/', auth, async (req, res) => {
  try {
    const q = new Quotation(req.body);
    await q.save();
    res.json(q);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const list = await Quotation.find().populate('customer');
    res.json(list);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
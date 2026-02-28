const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Invoice = require('../models/Invoice');

// simple create; GST calculation logic to be added later
router.post('/', auth, async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const list = await Invoice.find().populate('customer');
    res.json(list);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const inv = await Invoice.findById(req.params.id).populate('customer');
    if (!inv) return res.status(404).json({ msg: 'Not found' });
    res.json(inv);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
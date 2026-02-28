const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Purchase = require('../models/Purchase');

router.post('/', auth, async (req, res) => {
  try {
    const p = new Purchase(req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const list = await Purchase.find().populate('vendor');
    res.json(list);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
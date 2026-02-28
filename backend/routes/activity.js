const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ActivityLog = require('../models/ActivityLog');

router.get('/', auth, async (req, res) => {
  try {
    const logs = await ActivityLog.find().populate('user');
    res.json(logs);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
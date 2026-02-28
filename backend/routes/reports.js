const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// placeholder endpoints for future reports
router.get('/sales', auth, (req, res) => {
  res.send('Sales report');
});
router.get('/purchase', auth, (req, res) => {
  res.send('Purchase report');
});
router.get('/stock', auth, (req, res) => {
  res.send('Stock report');
});

module.exports = router;
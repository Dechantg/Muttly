require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const validateSession = require('../helpers/sessionValidation')



router.post('/', validateSession, async (req, res) => {

try {

  const userId = req.session.user.id;

  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.clearCookie('muttly');

    res.json({ success: true });
  });
} catch (error) {
  console.error('Error during logout:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

module.exports = router;
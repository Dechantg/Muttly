
require('dotenv').config();
const express = require('express');
const router = express.Router();
const validateSession = require('../helpers/sessionValidation');




router.get('/', validateSession, (req, res) => {
  try {
    // If the control reaches here, it means the session is valid
    res.status(200).json({ message: 'Valid session' });
  } catch (error) {
    console.error('Error during session validation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
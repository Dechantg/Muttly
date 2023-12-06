


const express = require('express');
const router = express.Router();

router.get('/get-session-cookie', (req, res) => {
  const sessionCookie = req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('connect.sid'));
  
  if (sessionCookie) {
    const value = sessionCookie.split('=')[1];
    res.json({ sessionCookie: value });
  } else {
    res.status(404).json({ message: 'Session cookie not found' });
  }
});

module.exports = router;

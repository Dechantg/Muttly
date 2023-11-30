

const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

// Assume you have a user with a hashed password
const hashedPassword = bcrypt.hashSync('userPassword', 10);

router.post('/', (req, res) => {


  const isValidUser = req.body.username === 'user123' && bcrypt.compareSync(req.body.password, hashedPassword);

  if (isValidUser) {

    req.session.user = { id: 123, username: 'user123' };
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



module.exports = router;
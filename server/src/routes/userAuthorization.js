

const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const getUserByEmail = require('../../database/queries/retrieve_user_login')


router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const hashedPasswordFromDB = user.password_hash;

    if (bcrypt.compareSync(password, hashedPasswordFromDB)) {
      
      req.session.user = { id: user.id, email: user.email };

      console.log("user login information", req.session.user)


     return res.status(200).json({
        message: 'Login successful',
        session: req.sessionID,
      });


    }  else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
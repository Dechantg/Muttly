

require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');

const addNewUser = require('../../database/queries/add_new_user')



router.post ('/', async (req, res) => {
  try {
 

    const { firstName, lastName, email, password } = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserResponse = await addNewUser(firstName, lastName, email, hashedPassword);

    if (newUserResponse.success) {
      req.session.user = { id: newUserResponse.user.id, username: newUserResponse.user.username };
    }

    console.log("New user created for: ", newUserResponse);

    res.status(200).json(newUserResponse);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


module.exports = router;


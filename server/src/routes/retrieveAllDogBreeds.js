
require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



const dogBreedName = require('../../database/queries/retrieve_all_breed_names');
const validateSession = require('../helpers/sessionValidation')


router.get('/', validateSession, async (req, res) => {
  try {
    const result = await dogBreedName();

    console.log('Fetched data:', result);


    res.json(result);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
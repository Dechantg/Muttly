

require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



const mostRecentBreeds = require('../../database/queries/most_recent_breeds');


router.get('/', async (req, res) => {
  try {
    const result = await mostRecentBreeds();

     console.log("here are the top breeds returned", result);

    res.json(result);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
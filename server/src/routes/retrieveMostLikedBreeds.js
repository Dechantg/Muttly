

require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



const mostLikedBreeds = require('../../database/queries/get_most_liked_breeds');
const topLikedDetails = require('../../database/queries/most_liked_details')


router.get('/', async (req, res) => {
  try {
    const result = await mostLikedBreeds();

    console.log('Fetched data:', result);
    const generatedBreedsIds = result.map(item => item.generated_breeds_id);

    const topLikedDetailsResult = await topLikedDetails(generatedBreedsIds);

    console.log("here are the top breeds returned", topLikedDetailsResult);

    res.json(topLikedDetailsResult);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
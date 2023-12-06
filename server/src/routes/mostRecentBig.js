

require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



const mostRecentBreedsBig = require('../../database/queries/get_most_recent_big');
const parentNames = require('../../database/queries/get_breed_name_extra_details')


router.get('/', async (req, res) => {
  try {
    const result = await mostRecentBreedsBig();

    //  console.log("here are the top breeds returned", result);

     const mostRecentIds = result.map((breed) => ({ id: breed.id }));

     const extraDetails = await parentNames(mostRecentIds);

    //  console.log("here are the most recent extra details", extraDetails);





    res.json({result, extraDetails});
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
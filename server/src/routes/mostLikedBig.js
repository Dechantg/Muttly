


require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



const mostLikedBreedsBig = require('../../database/queries/get_most_liked_big');
const topLikedDetails = require('../../database/queries/most_liked_details');
const parentNames = require('../../database/queries/get_breed_name_extra_details')


router.get('/', async (req, res) => {

  try {
    const result = await mostLikedBreedsBig();

    // console.log('Fetched data:', result);
    const generatedBreedsIds = result.map(item => item.generated_breeds_id);

    const topLikedDetailsResult = await topLikedDetails(generatedBreedsIds);


    const topLikedIds = topLikedDetailsResult.map((breed) => ({ id: breed.id }));

    // console.log("here are the items going to parentnames", topLikedIds)

    const extraDetails = await parentNames(topLikedIds);




    console.log("here are the top breeds returned from the new big boy route", topLikedDetailsResult);
    // console.log("here are extra details", extraDetails);



    res.json({topLikedDetailsResult, extraDetails});
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
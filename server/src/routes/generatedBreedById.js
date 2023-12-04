



require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const generatedBreedDetails = require('../../database/queries/retrieve_generated_dog')
const queryRecord = require('../../database/queries/get_generation_record')
const validateSession = require('../helpers/sessionValidation')
const breedNames = require('../../database/queries/get_breed_names_by_id')



router.get('/:id', validateSession, async (req, res) => {

try {

  // const userId = req.session.user.id;


  const dogBreedId = req.params.id;

  if (!dogBreedId) {
    return res.status(400).json({ error: 'Missing dogBreedId in the request' });
  }

  const dogBreedDetails = await generatedBreedDetails(dogBreedId);
  const genRecord = await queryRecord(dogBreedId);
  const breedNamesQuery = await breedNames(genRecord[0].breed_one, genRecord[0].breed_two);
  
  const extraStats = {
    genId: genRecord[0].generated_breeds_id,
    userId: genRecord[0].user_id,
    breedOne: breedNamesQuery[0].name,
    breedTwo: breedNamesQuery[1].name
  }


  console.log('Fetched data dog one:', dogBreedDetails);
  console.log("extra breed details", extraStats);

  res.json({dogBreedDetails, extraStats});

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;




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
const parentNames = require('../../database/queries/get_breed_name_extra_details')




router.get('/:id', async (req, res) => {

try {

  // const userId = req.session.user.id;


  const dogBreedId = req.params.id;

  if (!dogBreedId) {
    return res.status(400).json({ error: 'Missing dogBreedId in the request' });
  }

  const dogBreedDetails = await generatedBreedDetails(dogBreedId);

  const genRecord = await queryRecord(dogBreedId)

  const breedOne = genRecord[0].breed_one
  const breedTwo = genRecord[0].breed_two


  // console.log("breed one check", breedTwo)

  const breedName = await breedNames(breedOne, breedTwo)

  // console.log("breed name from 3rd querry", breedName)



  // console.log("ok first lets look at query 1", dogBreedDetails)


  // console.log("here is my extradetails from parents", genRecord)

  
  const extraStats = {
    genId: genRecord[0].generated_breeds_id,
    userId: genRecord[0].user_id,
    breedOne: breedName[0].name,
    breedTwo: breedName[1].name
  }


  // console.log("extra br444eed details", extraStats);

  res.json({dogBreedDetails, extraStats});

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
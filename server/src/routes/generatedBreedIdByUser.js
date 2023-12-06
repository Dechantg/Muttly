


require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const breedIdByUser = require('../../database/queries/get_generated_dog_by_user')
const validateSession = require('../helpers/sessionValidation')
const parentNames = require('../../database/queries/get_breed_name_extra_details')




router.get('/:id', validateSession, async (req, res) => {

try {

  const userId = req.session.user.id;

  if (!userId) {
    return res.status(400).json({ error: 'Missing dogBreedId in the request' });
  }

  const generatedBreeds = await breedIdByUser(userId);

  const generatedBreedsIds = generatedBreeds.map(item => item.id);

  // console.log("here is from this route my generatedBreedIds mapped", generatedBreedsIds)

  const generatedBreedIdMap = generatedBreedsIds.map((value) => ({ id: value }));




  const extraDetails = await parentNames(generatedBreedIdMap);


  // console.log('exdra details in console time:', extraDetails);


  // Send the combined results as JSON to the client
  res.json({generatedBreeds, extraDetails});

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
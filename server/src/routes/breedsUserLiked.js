require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const userLikedBreeds = require('../../database/queries/get_breeds_user_liked')
const validateSession = require('../helpers/sessionValidation')
const breedParentNames = require('../../database/queries/get_breed_name_extra_details')

router.get('/', validateSession, async (req, res) => {

try {

  const userId = req.session.user.id;

  console.log("here is my userId attempt to validate:", userId)

  if (!userId) {
    return res.status(400).json({ error: 'Missing dogBreedId in the request' });
  }

  const userLiked = await userLikedBreeds(userId);

  const userLikedIds = userLiked.map((breed) => ({ id: breed.id }));


  console.log("here is my check for breed ids: ", userLikedIds)

  const extraDetails = await breedParentNames(userLikedIds)

  console.log('here is the extradetails back from the query', extraDetails)



  // console.log('Fetched data dog details:', userLiked);


  res.json({userLiked, extraDetails});

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
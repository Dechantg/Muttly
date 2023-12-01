require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const userLikedBreeds = require('../../database/queries/get_breeds_user_liked')
const validateSession = require('../helpers/sessionValidation')



router.get('/:id', validateSession, async (req, res) => {

try {

  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: 'Missing dogBreedId in the request' });
  }

  const userLiked = await userLikedBreeds(userId);

  console.log('Fetched data dog details:', userLiked);


  res.json(userLiked);

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
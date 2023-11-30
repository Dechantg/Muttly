require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const deleteDogBreed = require('../../database/queries/delete_generated_dog')
const validateSession = require('../helpers/sessionValidation')



router.get('/:breedId', validateSession, async (req, res) => {


console.log("attempting to delete breed: ", req.params.breedId)
  const userId = req.user.id;
  // const ueserId = 3;
  const breedId = req.params.breedId;

  console.log(`Deleting breed with ID ${breedId} for user ID ${userId}`);


  try {

    await deleteDogBreed(breedId, userId);

    res.json({ success: true, message: 'Breed deleted successfully' });
  } catch (error) {
    console.error('Error in delete route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
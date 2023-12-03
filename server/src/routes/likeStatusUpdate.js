require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const changeLikeStatus = require('../../database/queries/change_photo_like_status');
const validateSession = require('../helpers/sessionValidation')



router.get('/:id', validateSession, async (req, res) => {

try {

  const userId = req.session.user.id;
  const generatedBreedId = req.params.id;
  const likeStatus = req.query.likeStatus === 'true';

  if (!generatedBreedId) {
    return res.status(400).json({ error: 'Missing generatedBreedId in the request' });
  }

  const dogBreedLikeStatus = await changeLikeStatus(userId, generatedBreedId, likeStatus);

  console.log('Fetched data dog details:', dogBreedLikeStatus);


  res.json(dogBreedLikeStatus);

} catch (error) {
  console.error('Error executing SQL query:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});


module.exports = router;
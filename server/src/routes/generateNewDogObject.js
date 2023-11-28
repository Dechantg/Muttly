
require('dotenv').config();

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



router.use(bodyParser.json());

const muttyAssistent = require('../openAiApiCall');

const newGeneratedDog = require('../../database/queries/add_new_generated_dog'); 
const dogBreed = require('../../database/queries/retrieve_dog_breed');


const parseNumericalValuesToIntegers = (data) => {
  const result = {};
  for (const key in data) {
    if (!isNaN(data[key])) {
      result[key] = parseInt(data[key]);
    } else {
      result[key] = data[key];
    }
  }
  return result;
};

router.get("/", async (req, res) => {
  try {
    // const dogOneId = 59;
    // const dogTwoId = 60;
    
    // Assuming muttyAssistent returns the object
    const dogBreedData = await muttyAssistent(dogOne, dogTwo);

    // Convert numerical values to integers
    const parsedDogBreedData = parseNumericalValuesToIntegers(dogBreedData);

    // Insert into the database
    await newGeneratedDog(parsedDogBreedData);

    console.log(parsedDogBreedData);
    res.json({ muttyResult: parsedDogBreedData });
  } catch (error) {
    console.error('Error in route handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const dogOne = {
  "good_with_children": 5,
  "good_with_other_dogs": 5,
  "shedding": 3,
  "grooming": 4,
  "drooling": 1,
  "coat_length": 1,
  "good_with_strangers": 4,
  "playfulness": 4,
  "protectiveness": 3,
  "trainability": 3,
  "energy": 4,
  "barking": 5,
  "max_height_male": 22,
  "max_height_female": 22,
  "max_weight_male": 55,
  "max_weight_female": 55,
  "min_height_male": 21,
  "min_height_female": 21,
  "min_weight_male": 45,
  "min_weight_female": 45,
  "name": "Bearded Collie"

}

const dogTwo = {
  "good_with_children": 3,
  "good_with_other_dogs": 3,
  "shedding": 3,
  "grooming": 3,
  "drooling": 1,
  "coat_length": 1,
  "good_with_strangers": 4,
  "playfulness": 5,
  "protectiveness": 3,
  "trainability": 5,
  "energy": 5,
  "barking": 4,
  "max_height_male": 22,
  "max_height_female": 22,
  "max_weight_male": 55,
  "max_weight_female": 55,
  "min_height_male": 19,
  "min_height_female": 19,
  "min_weight_male": 30,
  "min_weight_female": 30,
  "name": "Border Collie"

}


module.exports = router;
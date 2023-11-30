require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require("express");
const uniqid = require('uniqid');
const morgan = require('morgan');
const path = require('path');


const app = express();

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: process.env.KEY_PASSPHRASE,
}

const port = process.env.PORT || 8080;


// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
app.use(express.static(public));
// Note: Do Not make a route for "/" below or it will override our static public

// So we can read JSON body requests
app.use(express.json());
app.use(morgan('dev'));


const generateBreed              = require('./routes/generateNewDogObject');
const dogBreedNames              = require('./routes/retrieveAllDogBreeds')
const dogBreedById               = require('./routes/breedById')
const generatedBreedById         = require('./routes/generatedBreedById')
const generatedBreedsByUserId    = require('./routes/generatedBreedIdByUser')
const deleteDogBreed             = require('./routes/deleteBreed')
const mostLikedBreeds            = require('./routes/retrieveMostLikedBreeds')
const mostRecentBreeds           = require('./routes/mostRecentBreeds')
const breedsUserLiked            = require('./routes/breedsUserLiked')



// const breedDetails    = require('../database/queries/retrieve_dog_breed');


app.use('/api/mostliked', mostLikedBreeds);
app.use('/api/mostrecent', mostRecentBreeds);

app.use('/api/allbreednames', dogBreedNames);
app.use('/api/breedbyid', dogBreedById);
app.use('/api/userliked', breedsUserLiked);

app.use('/api/generatebreed', generateBreed);

app.use('/api/generatedbreedbyid', generatedBreedById);
app.use('/api/generatedbreedbyuserid', generatedBreedsByUserId);

app.use('/api/deletebreed', deleteDogBreed);




// app.use('/api/dogbreeddetails', retrieveDog)
// app.use('/api/retrievedgenerated', retrieveGeneratedDog)

// app.get('/api/test', async (req, res) => {
//     try {
//       // Assuming you have a table named 'items'
//       const someDogBreedId = 82;
//       // const someDogBreedIdTwo = 74;
  
//       const resultOne = await breedDetails(someDogBreedId);
  
//       console.log('Fetched data dog one:', resultOne);
  
    
//       // Send the combined results as JSON to the client
//       res.json(resultOne);
  
//     } catch (error) {
//       console.error('Error executing SQL query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// Simple Endpoint - no routes module


app.use(function(req, res) {
  res.status(404);
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}!`);
// });

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});



// Use Routed Endpoints
// const itemRoutes = require('./routes/itemRoutes');

// app.use('/api/items', itemRoutes(pool));

// const dogOne ={
//   "good_with_children": 5,
//   "good_with_other_dogs": 5,
//   "shedding": 2,
//   "grooming": 1,
//   "drooling": 1,
//   "coat_length": 1,
//   "good_with_strangers": 3,
//   "playfulness": 4,
//   "protectiveness": 3,
//   "trainability": 3,
//   "energy": 4,
//   "barking": 1,
//   "max_height_male": 22,
//   "max_height_female": 22,
//   "max_weight_male": 40,
//   "max_weight_female": 40,
//   "min_height_male": 19,
//   "min_height_female": 19,
//   "min_weight_male": 25,
//   "min_weight_female": 25,
//   "name": "Whippet"
// }
//  const dogTwo = {
//   "good_with_children": 5,
//   "good_with_other_dogs": 4,
//   "shedding": 4,
//   "grooming": 2,
//   "drooling": 1,
//   "coat_length": 1,
//   "good_with_strangers": 5,
//   "playfulness": 5,
//   "protectiveness": 3,
//   "trainability": 4,
//   "energy": 3,
//   "barking": 1,
//   "max_height_male": 13,
//   "max_height_female": 13,
//   "max_weight_male": 18,
//   "max_weight_female": 18,
//   "min_height_male": 10,
//   "min_height_female": 10,
//   "min_weight_male": 14,
//   "min_weight_female": 14,
//   "name": "Pug"
// }

// app.get('/api/test', async (req, res) => {
//   try {
//     // Assuming you have a table named 'items'
//     // const someDogBreedId = 82;
//     // const someDogBreedIdTwo = 74;

//     const resultOne = await dogBreed(someDogBreedId);
//     const resultTwo = await dogBreed(someDogBreedIdTwo);

//     console.log('Fetched data dog one:', resultOne);
//     console.log('Fetched data dogtwo:', resultTwo);

//     // Combine the results into a single object
//     const combinedResults = {
//       resultOne: resultOne,
//       resultTwo: resultTwo
//     };

//     // Send the combined results as JSON to the client
//     res.json(combinedResults);

//   } catch (error) {
//     console.error('Error executing SQL query:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
require('dotenv').config();
const express = require("express");
const uniqid = require('uniqid');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
app.use(express.static(public));
// Note: Do Not make a route for "/" below or it will override our static public

// So we can read JSON body requests
app.use(express.json());
app.use(morgan('dev'));

// Connect to Database
// const pool = require('./database/connect');

// Use Routed Endpoints
const itemRoutes = require('./routes/itemRoutes');
const muttyAssistent = require('./openAiApiCall');

// app.use('/api/items', itemRoutes(pool));

// Simple Endpoint - no routes module
app.get("/api/status", async (req, res) => {
  try {
    const result = await muttyAssistent(dogOne, dogTwo);
    res.json({ muttyResult: result });
  } catch (error) {
    console.error('Error in route handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(function(req, res) {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});


const dogOne ={
  "good_with_children": 5,
  "good_with_other_dogs": 5,
  "shedding": 2,
  "grooming": 1,
  "drooling": 1,
  "coat_length": 1,
  "good_with_strangers": 3,
  "playfulness": 4,
  "protectiveness": 3,
  "trainability": 3,
  "energy": 4,
  "barking": 1,
  "max_height_male": 22,
  "max_height_female": 22,
  "max_weight_male": 40,
  "max_weight_female": 40,
  "min_height_male": 19,
  "min_height_female": 19,
  "min_weight_male": 25,
  "min_weight_female": 25,
  "name": "Whippet"
}
 const dogTwo = {
  "good_with_children": 5,
  "good_with_other_dogs": 4,
  "shedding": 4,
  "grooming": 2,
  "drooling": 1,
  "coat_length": 1,
  "good_with_strangers": 5,
  "playfulness": 5,
  "protectiveness": 3,
  "trainability": 4,
  "energy": 3,
  "barking": 1,
  "max_height_male": 13,
  "max_height_female": 13,
  "max_weight_male": 18,
  "max_weight_female": 18,
  "min_height_male": 10,
  "min_height_female": 10,
  "min_weight_male": 14,
  "min_weight_female": 14,
  "name": "Pug"
}


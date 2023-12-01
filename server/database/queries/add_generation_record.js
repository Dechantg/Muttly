

const db = require('../connection');

const newBreedQuery = (breedQuery) => {
  const { userId, generatedBreedId, breedOne, breedTwo } = breedQuery;

  return db.query (
    'INSERT INTO new_breed_queries (user_id, generated_breeds_id, breed_one, breed_two) VALUES ($1, $2, $3, $4);',
    [userId, generatedBreedId, breedOne, breedTwo]
  )
  .catch (error => {
    console.error(`An error has occurred while inserting a new dog like status.`, error);
    throw error;
    });
};

module.exports = newBreedQuery;
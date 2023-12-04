

const db = require('../connection');

const newBreedQuery = (breedQuery) => {
  const { genId, userId, breedOne, breedTwo } = breedQuery;

  return db.query (
    'INSERT INTO new_breed_queries (generated_breeds_id, user_id, breed_one, breed_two) VALUES ($1, $2, $3, $4) RETURNING *;',
    [genId, userId, breedOne, breedTwo]
  )
  .then(data => {
    const dogDetails = data.rows;
    return dogDetails;
  })
  .catch (error => {
    console.error(`An error has occurred while inserting a new dog like status.`, error);
    throw error;
    });
};

module.exports = newBreedQuery;
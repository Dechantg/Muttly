
const db = require('../connection');

const addDogLike = (generatedId) => {
  const { userId, generatedBreedId, likeStatus } = generatedId;

  return db.query (
    'INSERT INTO liked_generated_breeds (user_id, generated_breeds_id, like_status) VALUES ($1, $2, $3);',
    [userId, generatedBreedId, likeStatus]
  )
  .catch (error => {
    console.error(`An error has occurred while inserting a new dog like status.`, error);
    throw error;
    });
};

module.exports = addDogLike;
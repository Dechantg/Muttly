

const db = require('../connection');

const changeLikeStatus = (generatedId, newLikeStatus) => {
  const { userId, generatedBreedId } = generatedId;

  return db.query (
    'UPDATE liked_generated_breeds SET like_status = $1 WHERE user_id = $2 AND generated_breeds_id = $3;',
    [newLikeStatus, userId, generatedBreedId]
  )
  .catch (error => {
    console.error(`An error has occurred while inserting a new dog like status.`, error);
    throw error;
    });
};

module.exports = changeLikeStatus;
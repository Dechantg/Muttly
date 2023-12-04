

const db = require('../connection');

const breedsUserLikedById = (userId, breedId) => {
  return db.query(
    'SELECT user_id, generated_breeds_id, like_status FROM liked_generated_breeds WHERE user_id = $1 AND generated_breeds_id = $2;', [userId, breedId])
  
    .then(data => {
      const userLikedBreeds = data.rows;
      
      if (userLikedBreeds.length === 0) {
        return [{
          user_id: userId,
          generated_breeds_id: breedId,
          like_status: false
        }];
      }
      return userLikedBreeds;

    })
    .catch(error => {
      console.error('An error occurred while fetching the most recent breeds:', error);
      throw error;
    });
};

module.exports = breedsUserLikedById;
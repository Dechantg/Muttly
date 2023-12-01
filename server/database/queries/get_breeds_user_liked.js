

const db = require('../connection');

const breedsUserLiked = (userId) => {
  return db.query(
    'SELECT * FROM generated_breeds JOIN liked_generated_breeds ON generated_breeds.id = liked_generated_breeds.generated_breeds_id WHERE liked_generated_breeds.user_id = $1 AND liked_generated_breeds.like_status = true ORDER BY generated_breeds.id;', [userId])
  
    .then(data => {
      const userLikedBreeds = data.rows;
      return userLikedBreeds;
    })
    .catch(error => {
      console.error('An error occurred while fetching the most recent breeds:', error);
      throw error;
    });
};

module.exports = breedsUserLiked;


const db = require('../connection');

const breedsUserLiked = (userId) => {
  return db.query(
    `SELECT generated_breeds.id,
    generated_breeds.name,
    generated_breeds.good_with_children,
    generated_breeds.good_with_other_dogs,
    generated_breeds.shedding,
    generated_breeds.grooming,
    generated_breeds.drooling,
    generated_breeds.coat_length,
    generated_breeds.good_with_strangers,
    generated_breeds.protectiveness,
    generated_breeds.trainability,
    generated_breeds.energy,
    generated_breeds.barking,
    generated_breeds.max_height_male,
    generated_breeds.max_height_female,
    generated_breeds.max_weight_male,
    generated_breeds.max_weight_female,
    generated_breeds.min_height_male,
    generated_breeds.min_height_female,
    generated_breeds.min_weight_male,
    generated_breeds.min_weight_female,
    generated_breeds.description,
    generated_breeds.generated_photo_link,
    liked_generated_breeds.user_id,
    liked_generated_breeds.like_status
    FROM generated_breeds
    JOIN liked_generated_breeds ON generated_breeds.id = liked_generated_breeds.generated_breeds_id
    WHERE liked_generated_breeds.user_id = $1 AND liked_generated_breeds.like_status = true AND generated_breeds.user_id != $1
    ORDER BY generated_breeds.id;`, [userId])
  
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
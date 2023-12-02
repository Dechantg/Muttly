

const db = require('../connection');


const mostLikedBreeds = () => {
  return db.query (
    'SELECT generated_breeds_id, COUNT(*) as occurrence_count FROM liked_generated_breeds WHERE like_status = true GROUP BY generated_breeds_id ORDER BY occurrence_count DESC LIMIT 5;')
    .then(data => {
      const mostLiked = data.rows;
      return mostLiked;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id ${userId}.`, error);
      throw error;
    });

};

module.exports = mostLikedBreeds;
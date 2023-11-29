
const db = require('../connection');



const topLikedDetails = (generatedBreedsIds) => {
  return db.query(
    'SELECT * FROM generated_breeds WHERE id IN ($1, $2, $3, $4, $5)', generatedBreedsIds
    )
  .then(data => {
    const topLikedDetails = data.rows;
    return topLikedDetails;
  })
  .catch(error => {
    console.error('An error occurred while fetching top liked details:', error);
    throw error;
  });
};

module.exports = topLikedDetails;


const db = require('../connection');

const getMostRecentBreeds = () => {
  return db.query(
    'SELECT * FROM generated_breeds ORDER BY created_at DESC LIMIT 25;'
  )
    .then(data => {
      const mostRecentBreeds = data.rows;
      return mostRecentBreeds;
    })
    .catch(error => {
      console.error('An error occurred while fetching the most recent breeds:', error);
      throw error;
    });
};

module.exports = getMostRecentBreeds;
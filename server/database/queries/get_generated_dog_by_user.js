

const db = require('../connection');


const generatedBreedByUser = (userId) => {
  return db.query (
    'SELECT * FROM generated_breeds WHERE user_id = $1;', [userId])
    .then(data => {
      const generatedBreedByUser = data.rows;
      return generatedBreedByUser;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id ${userId}.`, error);
      throw error;
    });

};

module.exports = generatedBreedByUser;
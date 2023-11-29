

const db = require('../connection');


const dogBreed = (dogBreedId) => {
  return db.query (
    'SELECT * FROM dog_breeds WHERE id = $1;', [dogBreedId])
    .then(data => {
      const dogBreed = data.rows;
      return dogBreed;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id ${dogBreedId}.`, error);
      throw error;
    });

};

module.exports = dogBreed;
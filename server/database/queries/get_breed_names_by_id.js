

const db = require('../connection');


const dogBreedName = (breed_one, breed_two) => {
  return db.query (
    'SELECT id, name FROM dog_breeds WHERE id = $1 OR id = $2', [breed_one, breed_two])
    .then(data => {
      const breedNames = data.rows;
      return breedNames;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id`, error);
      throw error;
    });

};

module.exports = dogBreedName;
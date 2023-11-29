



const db = require('../connection');


const dogBreedName = () => {
  return db.query (
    'SELECT id, name FROM dog_breeds;')
    .then(data => {
      const generatedBreedDetails = data.rows;
      return generatedBreedDetails;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id`, error);
      throw error;
    });

};

module.exports = dogBreedName;

const db = require('../connection');


const generatedBreed = (generatedBreedId) => {
  return db.query (
    '
    SELECT * FROM generated_breeds
    WHERE id = $1;
    ', [generatedBreedId])
    .then(data => {
      const generatedBreedDetails = data.rows;
      return generatedBreedDetails;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id ${breedId}.`, error);
      throw error;
    });

};

module.exports = generatedBreed;
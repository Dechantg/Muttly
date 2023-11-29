const db = require('../connection');


const generatedBreed = (generatedBreedId) => {
  return db.query (
    'SELECT * FROM generated_breeds WHERE id = $1;', [generatedBreedId])
    .then(data => {
      const generatedBreed = data.rows;
      return generatedBreed;
    })
    .catch (error => {
      console.error(`An error has occured while fetching the details of authorized to vote poll_id ${generatedBreedId}.`, error);
      throw error;
    });

};

module.exports = generatedBreed;
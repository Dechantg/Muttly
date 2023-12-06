

const db = require('../connection');

const generationRecord = (breedId) => {
  return db.query (
    `SELECT generated_breeds_id, user_id, breed_one, breed_two FROM new_breed_queries WHERE generated_breeds_id = $1`,
    [breedId]
  )
  .then(data => {
    const dogDetails = data.rows;
    console.log("from inside the querry is is record", dogDetails)
    return dogDetails;
  })
  .catch (error => {
    console.error(`An error has occurred while inserting a new dog like status.`, error);
    throw error;
    });
};

module.exports = generationRecord;
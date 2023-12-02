

const db = require('../connection');



const deleteGeneratedBreed = (breedId, userId) => {
  console.log(`Deleting breed with ID ${breedId} for user ID ${userId}`);
  return db.query('DELETE FROM generated_breeds WHERE id = $1 AND user_id = $2;', [breedId, userId])
    .then(result => {
      console.log('Delete successful:', result);
    })
    .catch(error => {
      console.error('Delete failed:', error);
      throw error;
    });
};

module.exports = deleteGeneratedBreed;
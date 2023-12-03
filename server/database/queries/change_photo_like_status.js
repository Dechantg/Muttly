const db = require('../connection');


const changeLikeStatus = async (userId, generatedBreedId, likeStatus) => {
  try {

    // Check if a record with the specified user_id and generated_breeds_id exists
    const checkRecordQuery = 'SELECT * FROM liked_generated_breeds WHERE user_id = $1 AND generated_breeds_id = $2;';
    const existingRecord = await db.query(checkRecordQuery, [userId, generatedBreedId]);

    if (existingRecord.rows.length > 0) {
      // If a record exists, perform an update
      const updateQuery = 'UPDATE liked_generated_breeds SET like_status = $1 WHERE user_id = $2 AND generated_breeds_id = $3;';
      await db.query(updateQuery, [likeStatus, userId, generatedBreedId]);
    } else {
      // If no record exists, perform an insert
      const insertQuery = 'INSERT INTO liked_generated_breeds (user_id, generated_breeds_id, like_status) VALUES ($1, $2, $3);';
      await db.query(insertQuery, [userId, generatedBreedId, likeStatus]);
    }

    return { userId, generatedBreedId, likeStatus };

  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }
};

module.exports = changeLikeStatus;
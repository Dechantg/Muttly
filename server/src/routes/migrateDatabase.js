const express = require('express');
const router = express.Router();
// const dropTables = require('../../database/queries/drop_tables');
const uploadSchema = require('../../database/queries/upload_schema');
// const uploadSeeds = require('../../database/queries/upload_seeds');
const migrateGeneratedDogData = require('../../database/queries/transfer_data_generated_dogs');
const migrateUserData = require('../../database/queries/transfer_user_data');
const migrateBreedData = require('../../database/queries/transfer_dog_breed_data')
const migrateBreedQueryData = require('../../database/queries/transfer_new_breed_queries_data');
const migrateLikedGeneratedBreedData = require('../../database/queries/transfer_liked_generated_breed_data');


router.get('/', async (req, res) => {
  try {
    // await dropTables();

    await uploadSchema();

    await migrateUserData();

    await migrateBreedData();

    await migrateGeneratedDogData();

    await migrateBreedQueryData();

    await migrateLikedGeneratedBreedData();





    res.status(200).json({ success: true, message: 'Database initialized successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
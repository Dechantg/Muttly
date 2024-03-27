
const db = require('../connection');
const dbOld = require('../connectionOld');

const tranferData = async () => {
  try {
    console.log('Fetching data from old database...');
    const data = await dbOld.query('SELECT * FROM dog_breeds;');

    const rows = data.rows
    // console.log('counting of the data', rows)


    await rows.forEach(row => {

      const insertQuery = 'INSERT INTO dog_breeds (id, image_link, good_with_children, good_with_other_dogs, shedding, grooming, drooling, coat_length, good_with_strangers, playfulness, protectiveness, trainability, energy, barking, max_height_male, max_height_female, max_weight_male, max_weight_female, min_height_male, min_height_female, min_weight_male, min_weight_female, name, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24);';
        const values = [
          row.id, row.image_link, row.good_with_children, row.good_with_other_dogs,
          row.shedding, row.grooming, row.drooling, row.coat_length, row.good_with_strangers, row.playfulness,
          row.protectiveness, row.trainability, row.energy, row.barking, row.max_height_male, row.max_height_female,
          row.max_weight_male, row.max_weight_female, row.min_height_male, row.min_height_female, row.min_weight_male,
          row.min_weight_female, row.name, row.description
        ];


        db.query(insertQuery, values)
        
    }
    )
    console.log('source breed data was sucessfully transfered');

  } catch (error) {
    console.error('An error occurred while moving data between Elephant and Local for table generated_breeds:', error);
    throw error;
  }

};

module.exports = tranferData;


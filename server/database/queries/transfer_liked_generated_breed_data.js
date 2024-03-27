
const db = require('../connection');
const dbOld = require('../connectionOld');

const tranferData = async () => {
  try {
    console.log('Fetching data from old database...');
    const data = await dbOld.query('SELECT * FROM liked_generated_breeds;');

    const rows = data.rows
    // console.log('counting of the data', rows)


    await rows.forEach(row => {

      const insertQuery = 'INSERT INTO liked_generated_breeds (id, user_id, generated_breeds_id, like_status) VALUES ($1, $2, $3, $4);';
        const values = [row.id, row.user_id, row.generated_breeds_id, row.like_status];


        db.query(insertQuery, values)
        
    }
    )
  
    console.log('The liked generated breed data was sucessfully transfered');
  } catch (error) {
    console.error('An error occurred while moving data between Elephant and Local for table generated_breeds:', error);
    throw error;
  }

};

module.exports = tranferData;




const db = require('../connection');
const dbOld = require('../connectionOld');

const tranferData = async () => {
  try {
    console.log('Fetching data from old database...');
    const data = await dbOld.query('SELECT * FROM new_breed_queries;');

    const rows = data.rows
    console.log('counting of the data from new breed queries', rows)


    await rows.forEach(row => {

      const insertQuery = 'INSERT INTO new_breed_queries (id, created_at, user_id, generated_breeds_id, breed_one, breed_two, leo_gen_record, openai_thread_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
        const values = [row.id, row.created_at,  row.user_id, row.generated_breeds_id, row.breed_one, row.breed_two, row.leo_gen_record, row.openai_thread_id];


        db.query(insertQuery, values)
        
    })
    console.log('The breed generation record data was sucessfully transfered');

  
  } catch (error) {
    console.error('An error occurred while moving data between Elephant and Local for table generated_breeds:', error);
    throw error;
  }

};

module.exports = tranferData;



const db = require('../connection');
const dbOld = require('../connectionOld');

const tranferData = async () => {
  try {
    console.log('Fetching data from old database...');
    const data = await dbOld.query('SELECT * FROM users;');

    const rows = data.rows
    // console.log('counting of the data', rows)


    await rows.forEach(row => {

      const insertQuery = 'INSERT INTO users (id, created_at, first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4, $5, $6);';
        const values = [
          row.id, row.created_at, row.first_name, row.last_name, row.email, row.password_hash];

        db.query(insertQuery, values)


    }
    )
    console.log('The user data was sucessfully transfered');

  } catch (error) {
    console.error('An error occurred while moving data between Elephant and Local for table generated_breeds:', error);
    throw error;
  }

};

module.exports = tranferData;


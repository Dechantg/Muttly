

const db = require('../connection');


const addNewUser = async (firstName, lastName, email, hashedPassword) => {
  try {
    const data = await db.query(
      'INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4);',
      [firstName, lastName, email, hashedPassword]
    );

    const newUser = data.rows;
    return { success: true, user: newUser, message: 'User created successfully' };
  } catch (error) {
    console.error(`Error creating user: ${error.message}`);
    throw { success: false, error: 'Internal Server Error' };
  }
};

module.exports = addNewUser;
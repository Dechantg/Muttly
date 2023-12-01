
const db = require('../connection');


async function getUserByEmail(email) {
  const result = await db.query('SELECT id, email, password_hash FROM users WHERE email = $1', [email]);
  return result.rows.length === 0 ? null : result.rows[0];
}

module.exports = getUserByEmail;
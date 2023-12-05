

const db = require('../connection');



const breedParentNames = (breedIds) => {


const ids = breedIds.map(item => item.id);

const placeholders = ids.map((_, index) => `$${index + 1}`).join(',');

const query = `
    SELECT
      new_breed_queries.generated_breeds_id AS genId,
      new_breed_queries.user_id AS userId,
      t1_breed_one.name AS breedOne,
      t1_breed_two.name AS breedTwo
    FROM
      new_breed_queries
    JOIN
      dog_breeds AS t1_breed_one ON new_breed_queries.breed_one = t1_breed_one.id
    JOIN
      dog_breeds AS t1_breed_two ON new_breed_queries.breed_two = t1_breed_two.id
    WHERE
      new_breed_queries.generated_breeds_id IN (${placeholders});
  `;


 return db.query(query, ids)
 .then(data => {
      const names = data.rows;
      return names;
    })
    .catch(error => {
      console.error('Query failed:', error);
      throw error;
    });
};

module.exports = breedParentNames;
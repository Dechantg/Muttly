const db = require('../connection');

const topLikedDetails = (generatedBreedsIds) => {



  const placeholders = generatedBreedsIds.map((_, index) => `$${index + 1}`).join(',');
  
  
  
  const query = `
    SELECT * FROM generated_breeds WHERE id IN (${placeholders})
  `;

  return db.query(query, generatedBreedsIds)
    .then(data => {
      const topLikedDetails = data.rows;
      console.log("from in details", topLikedDetails)
      return topLikedDetails;
    })
    .catch(error => {
      console.error('An error occurred while fetching top liked details:', error);
      throw error;
    });
};

module.exports = topLikedDetails;
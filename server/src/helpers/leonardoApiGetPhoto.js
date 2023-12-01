require('dotenv').config();
const fetch = require('node-fetch');




async function secondFetch(generationId) {
  try {

    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.LEONARDO_API,
      },
    };

    const response = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`, options);
    const data = await response.json();
    const dogUrl = data.generations_by_pk.generated_images[0].url;
    console.log("Second fetch data:", dogUrl);

    return dogUrl;
  } catch (error) {
    console.error(error);
  }
}

module.exports = secondFetch;
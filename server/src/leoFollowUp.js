
require('dotenv').config();
const fetch = require('node-fetch');

async function generateDogPhoto() {
  try {

    const secondOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.LEONARDO_API,
      },
    };
    secondResponse = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations/d114e2ec-1f48-4cd8-a0ea-4bdd90bcfbe7`, secondOptions);
    const secondData = await secondResponse.json();
    console.log("Second fetch data:", secondData.generations_by_pk.generated_images);
  
  
    } 
    
    catch (error) {
    console.error(error);
  }
  
  }
  // Example usage
  generateDogPhoto()
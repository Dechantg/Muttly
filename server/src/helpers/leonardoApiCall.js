
require('dotenv').config();
const fetch = require('node-fetch');



async function leonardoSubmit(dogOne, dogTwo) {
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: process.env.LEONARDO_API,
      },
      body: JSON.stringify({
    height: 512,
    modelId: 'e316348f-7773-490e-adcd-46757c738eb7',
    prompt: `A solo mix breed ${dogOne} / ${dogTwo} standing alone and wagging its tail, looking cute and happy.`,
    width: 800,
    scheduler: 'LEONARDO',
    num_inference_steps: 60,
    init_generation_image_id: '1410846b-a3a3-41c7-b218-33548f637930',
    init_strength: 0.1,
    nsfw: false,
    negative_prompt: 'two heads, extra ears, no tail, bad anatomy, extra tail, collar, clothing, duplicate ears, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, mutated paws, poorly drawn paws, poorly drawn face, mutation, deformed, blurry, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature',
    presetStyle: 'LEONARDO',
    guidance_scale: 9,
    num_images: 1,
    public: false,
    promptMagic: false,
    alchemy: false
  })
};
const response = await fetch('https://cloud.leonardo.ai/api/rest/v1/generations', options);
const data = await response.json();
// console.log("First fetch data:", data);

return data;
} catch (error) {
console.error(error);
}
}


module.exports = leonardoSubmit;
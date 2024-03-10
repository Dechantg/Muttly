
require('dotenv').config();
const fetch = require('node-fetch');
const sdk = require('api')('@leonardoai/v1.0#2qtdfpqlt40u8hs');



async function leonardoSubmit(dogOne, dogTwo) {
  try {

    sdk.auth(process.env.LEONARDO_AUTH);
    const response = await sdk.createGeneration({
      height: 512,
      modelId: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
      // prompt: 'An oil painting of a cat',
      prompt: `A solo mix breed ${dogOne} / ${dogTwo} standing alone and wagging its tail, looking cute and happy in a grass park with a blue sky. Full dog body must fit within photo and dog should be at an angle so it is looking towards the camera but side body should be visable`,
      num_inference_steps: 60,
      nsfw: false,
      num_images: 1,
      public: false,
      promptMagic: false,
      alchemy: false,
      guidance_scale: 9,
      init_strength: 0.1,
      presetStyle: 'LEONARDO',
      negative_prompt: 'two heads, extra ears, no tail, bad anatomy, extra tail, collar, clothing, duplicate ears, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, mutated paws, poorly drawn paws, poorly drawn face, mutation, deformed, blurry, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature',
      width: 800
    });

    console.log(response.data);


const data = await response.data;
console.log("First fetch data:", data);

return data;
} catch (error) {
console.error(error);
}
}


module.exports = leonardoSubmit;
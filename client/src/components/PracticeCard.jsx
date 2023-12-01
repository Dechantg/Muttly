import React from 'react';

import '../views/stylesheets/PracticeCard.scss';

const PokemonCard = () => {

  const card = (num, type, name, image) => {
    return (
      <div className={`nameimageinfo color-${num}`}>
  {/* Name and basic stats */}
    <table className="nameheaders">
  <tbody>
    <tr>
      <td className="basic" colSpan="3">{type}</td>
    </tr>
    <tr className='top_stat_container'>
      <td className='top_stats'>
        <p className="nameofanimal" colSpan="3">{name}</p>
        <div className='protect_container'>
          <div className="attackdesc"><span className="label">Protectiveness</span></div>
          <div className="typesign">
            <img className="energy_symbol" src="../icons/shield.png"/>
          </div>
          <div className="typesign">
            <img className="energy_symbol" src="../icons/shield.png"/>
          </div>
          <div className="typesign">
            <img className="energy_symbol" src="../icons/shield.png"/>
          </div>
          <div className="typesign">
            <img className="energy_symbol" src="../icons/shield.png"/>
          </div>
          <div className="typesign">
            <img className="energy_symbol" src="../icons/shield.png"/>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>


    {/* Image and description */}
    <img className='card_img' src={image} alt="Pikachu" />
    <br />
    {/* "interesting fact" */}
    <div className='below_image_container'>
      <div className="description">
        <span className='height'>Average Height 1'4"</span>
        <span className='weight'>Average Weight 13 lbs.</span>
      </div>
      <img className= 'set_logo' src="../icons/paws_pink.png"/>
    </div>
    <div className='stat_container'>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Shedding</span></td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/one-comb.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/one-comb.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/one-comb.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/one-comb.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/one-comb.png"/> </td>
          </tr>
        </tbody>
      </table>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Energy</span></td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/battery.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/battery.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/battery.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/battery.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/battery.png"/> </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='stat_container'>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Barking</span></td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/bark.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/bark.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/bark.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/bark.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/bark.png"/> </td>
          </tr>
        </tbody>
      </table>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Drooling</span></td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/drool.png"/> </td>
            <td className="typesign"> <img className="energy_symbol" src="../icons/drool.png"/> </td>

          </tr>
        </tbody>
      </table>
    </div>
    {/* Bottom Description */}
    {/* This is the list for the purposes of following the exercise instructions to have a list D */}
    <ul>
      {/* "interesting fact" */}
      <p className='breed_facts'>Breed Facts</p>
      <li className="italicize">The Basshuahound is an energetic and playful breed, known for its peculiar mix of traits. Despite high energy levels, they moderate their barking to large stimuli only. The breed is protective, yet can get along well with children and other dogs. Coats are low shedding and short, but they require a moderate amount of grooming. While generally good with strangers, they also make reliable watchdogs. They have a medium height and weight, making them ideal for various home environments</li>
      <li className="copyrights">
          <span className="medium">©2023  -  Muttly Inc  -  BREEDMIXER Ltd  -  AlChGr Designs</span>
      </li>
    </ul>
</div>
    )
  } 

  const card2 = (num, type, name, image) => {
    return (
      <div className={`nameimageinfo color-${num}`}>
  {/* Name and basic stats */}
    <table className="nameheaders">
  <tbody>
    <tr>
      <td className="basic" colSpan="3">{type}</td>
    </tr>
    <tr className='top_stat_container'>
      <td className='top_stats'>
        <p className="nameofanimal" colSpan="3">{name}</p>
        <div className='protect_container'>
          <div className="attackdesc"><span className="label">Protectiveness</span></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>


    {/* Image and description */}
    <img className='card_img' src={image} alt="Pikachu" />
    <br />
    {/* "interesting fact" */}
    <div className='below_image_container'>
      <div className="description">
        <span className='height'>Average Height </span>
        <span className='weight'>Average Weight </span>
      </div>
      <img className= 'set_logo' src="../icons/paws_pink.png"/>
    </div>
    <div className='stat_container'>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Shedding</span></td>
          </tr>
        </tbody>
      </table>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Energy</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='stat_container'>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Barking</span></td>
          </tr>
        </tbody>
      </table>
      <table className="stats">
        <tbody>
          <tr className="symbol_container">
            <td className="attackdesc"><span className="label">Drooling</span></td>

          </tr>
        </tbody>
      </table>
    </div>
    {/* Bottom Description */}
    {/* This is the list for the purposes of following the exercise instructions to have a list D */}
    <ul>
      {/* "interesting fact" */}
      <p className='breed_facts'>Breed Facts</p>
      <li className="italicize"></li>
      <li className="copyrights">
        <span className="medium">©2023  -  Muttly Inc  -  BREEDMIXER Ltd  -  AlChGr Designs</span>
      </li>
    </ul>
</div>
    )
  } 

  return (
    <td className="organizecardsB">
      {card(1,'Base Breed', 'Miniature Shcnauzer', 'https://api-ninjas.com/images/dogs/miniature_schnauzer.jpg')}
      {card(2,'Miniature Shcnauzer/Alaskan Malmute','Schnauzer Malmute', '../mock_dogs/Default_alaskan_malamuteminiature_schnauzer_looking_cute_and_h_0.jpg')}
      {card2(3)}
    </td>
  );
};

export default PokemonCard; 

// "https//api-ninjas.com/images/dogs/alaskan_malamute.jpg"
// "max_height_male" 25,
//   "max_height_female" 25,
//   "max_weight_male" 85,
//   "max_weight_female" 75,
//   "min_height_male" 25,
//   "min_height_female" 25,
//   "min_weight_male" 85,
//   "min_weight_female" 75, 
// "shedding" 3,
// "grooming" 3,
// "drooling" 1,
// "coat_length" 1,
// "good_with_strangers" 3,
// "playfulness" 3,
// "protectiveness" 4,
// "trainability" 5,
// "energy" 4,
// "barking" 3,  


// {
//   "image_link" "https//api-ninjas.com/images/dogs/miniature_schnauzer.jpg",
//   "good_with_children" 5,
//   "good_with_other_dogs" 3,
//   "shedding" 3,
//   "grooming" 4,
//   "drooling" 2,
//   "coat_length" 1,
//   "good_with_strangers" 3,
//   "playfulness" 4,
//   "protectiveness" 4,
//   "trainability" 5,
//   "energy" 3,
//   "barking" 5,
//   "max_height_male" 14,
//   "max_height_female" 14,
//   "max_weight_male" 20,
//   "max_weight_female" 20,
//   "min_height_male" 12,
//   "min_height_female" 12,
//   "min_weight_male" 11,
//   "min_weight_female" 11,
//   "name" "Miniature Schnauzer"
// },


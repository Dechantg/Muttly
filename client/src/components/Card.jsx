import React from "react";
import '../views/stylesheets/Card.scss';

function Card(props) {

  const {num, image, shedding, drooling, protectiveness, energy, barking, height, weight, name, description, dog1, dog2} = props

  const avgStat = array => {
      return array.reduce((x,y) => x+y)/array.length;
  } 

  const avgWeight = avgStat(weight)
  const avgHeight = avgStat(height) 

  const symbolGenerator = (statObj) => {
    const type = Object.keys(statObj)[0];
    const value = statObj[key];

    const fullFunct = () => {
      const elements = [];
      for (let i = 1; i <= value; i++) {
        elements.push(
          <td key={i} className="typesign">
            <img className="energy_symbol" src={`../icons/${type}.png`} />
          </td>
        );
      }
      return elements;
    };

    const halfFunct = () => {
      const newValue = value + 0.5;
      const elements = [];
      for (let i = 1; i <= newValue; i++) {
        elements.push(
          i === newValue ? (
            <td key={i} className="typesign">
              <img className="energy_symbol" src={`../icons/${type}_half.png`} />
            </td>
          ) : (
            <td key={i} className="typesign">
              <img className="energy_symbol" src={`../icons/${type}.png`} />
            </td>
          )
        );
      }
      return elements;
    };

  value % 1 === 0.5 ? halfFunct() : fullFunct() 
};


  return (
    <div className={`nameimageinfo color-${num || 'fusion'}`}>
      <table className="nameheaders">
        <tbody>
          <tr>
            <td className="basic" colSpan="3">{num ? "Base Breed" : `${dog1}/${dog2}`}</td>
          </tr>
          <tr className='top_stat_container'>
            <td className='top_stats'>
              <p className="nameofanimal" colSpan="3">{name}</p>
              <div className='protect_container'>
                <div className="attackdesc"><span className="label">Protectiveness</span></div>
                {symbolGenerator(protectiveness)}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <img className='card_img' src={image} alt={name} />
      <br />
      <div className='below_image_container'>
        <div className="description">
          <span className='height'>Average Height {avgHeight}</span>
          <span className='weight'>Average Weight {avgWeight}</span>
        </div>
        <img className='set_logo' src="../icons/paws_pink.png" alt="Logo" />
      </div>
      <div className='stat_container'>
        <table className="stats">
          <tbody>
            <tr className="symbol_container">
              <td className="attackdesc"><span className="label">Shedding</span></td>
              {symbolGenerator(shedding)}
            </tr>
          </tbody>
        </table>
        <table className="stats">
          <tbody>
            <tr className="symbol_container">
              <td className="attackdesc"><span className="label">Energy</span></td>
              {symbolGenerator(energy)}
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stat_container'>
        <table className="stats">
          <tbody>
            <tr className="symbol_container">
              <td className="attackdesc"><span className="label">Drooling</span></td>
              {symbolGenerator(drooling)}
            </tr>
          </tbody>
        </table>
        <table className="stats">
          <tbody>
            <tr className="symbol_container">
              <td className="attackdesc"><span className="label">Barking</span></td>
              {symbolGenerator(barking)}
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <p className='breed_facts'>Breed Facts</p>
        <li className="italicize">{description || 'Nothing to say...'}</li>
        <li className="copyrights">
          <span className="medium">©2023 - Muttly Inc - BREEDMIXER Ltd - AlChGr Designs</span>
        </li>
      </ul>
    </div>
  );
}

export default Card;

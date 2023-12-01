import React from "react";
import '../views/stylesheets/Card.scss';

function Card({ num, type, name, image }) {
  return (
    <div className={`nameimageinfo color-${num}`}>
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

      <img className='card_img' src={image} alt={name} />
      <br />
      <div className='below_image_container'>
        <div className="description">
          <span className='height'>Average Height</span>
          <span className='weight'>Average Weight</span>
        </div>
        <img className='set_logo' src="../icons/paws_pink.png" alt="Logo" />
      </div>

      {/* Stat containers */}
      {/* Replace with data */}
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
              <td className="attackdesc"><span className="label">Drooling</span></td>
            </tr>
          </tbody>
        </table>
        <table className="stats">
          <tbody>
            <tr className="symbol_container">
              <td className="attackdesc"><span className="label">Barking</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Breed Facts */}
      {/* Replace with data */}
      <ul>
        <p className='breed_facts'>Breed Facts</p>
        <li className="italicize"></li>
        <li className="copyrights">
          <span className="medium">©2023 - Muttly Inc - BREEDMIXER Ltd - AlChGr Designs</span>
        </li>
      </ul>
    </div>
  );
}

export default Card;

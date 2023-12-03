// DogBreedCardModal.jsx

import React, {useEffect, useState } from 'react';
import Card from './Card';
import '../views/stylesheets/DogBreedCardModal.scss';

const DogBreedCardModal = (props) => {

  const [liked, setLike] = useState(false) 
  const [closeModal, setClose] = useState(true)
  const {image, shedding, drooling, protectiveness, energy, barking, height, weight, name, description, dog1, dog2, feed} = props

  const onLikeClick = () => {
    setLike(prev => !prev)
    setTimeout(()=> setClose(false), 2000)
  } 

  const onShareClick = () => {
    navigator.clipboard.writeText('pets.ca')
      .then(() => {
        console.log('Link copied to clipboard: google.ca');
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Unable to copy link to clipboard:', error);
        alert('Failed to copy link to clipboard');
      });
  }
  

  const onTrashClick = () => {
    alert("I'm trash?! YOU'RE TRASH! GRRRRRRR!")
    setTimeout(()=> setClose(false), 1000)
  }

  const onCloseClick = () => {
    setClose(false)
  }

  return (
    <>
      {closeModal && 
      <div className='modal-background'>
        <div className="dog-breed-card">
          <div className='modal-card-mid-container'>
          {feed ? <a><img className='modal-card-icons'  onClick={onCloseClick} src='../icons/close.png'></img></a>
            : <a><img className='modal-card-icons'  onClick={onTrashClick} src='../icons/trash-can.png'></img></a>}
            <Card
              image={image || null}
              shedding={shedding || null}
              drooling={drooling || null}
              protectiveness={protectiveness|| null}
              energy={energy || null}
              barking={barking || null} 
              height={height || null} 
              weight={weight || null}
              name={name || null} 
              description={description || null} 
              dog1 = {dog1}
              dog2 = {dog2}
            />
            <a><img className='modal-card-icons' onClick={onLikeClick} src={
              liked ? '../icons/heart.png'
            : '../icons/heart_empty.png'
          }></img></a>
            </div>
            <a><img className='modal-card-icons' onClick={onShareClick} src='../icons/share.png'></img></a>
        </div>
      </div>}
    </>
  );
};

export default DogBreedCardModal;
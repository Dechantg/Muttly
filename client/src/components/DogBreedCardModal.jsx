// DogBreedCardModal.jsx

import React, {useEffect, useState } from 'react';
import Card from './Card';
import '../views/stylesheets/DogBreedCardModal.scss';

const DogBreedCardModal = () => {

  const [liked, setLike] = useState(false) 

  const onLikeClick = () => {
    setLike(prev => !prev)
  } 

  const onShareClick = () => {
    alert('Link copied to clipboard!');

  } 

  const onDeleteClick = () => {
    alert("I'm trash?! YOU'RE TRASH! GRRRRRRR!")
    setTimeout(()=> console.log(lol), 1000)
  }

  return (
    <div className="dog-breed-card">
      <div className='modal-card-mid-container'>
        <a><img className='modal-card-icons' onClick={onShareClick} src='../icons/share.png'></img></a>
        <Card/>
        <a><img className='modal-card-icons' onClick={onLikeClick} src={
          liked ? '../icons/heart.png'
        : '../icons/heart_empty.png'}
        ></img></a>
        </div>
        <a><img className='modal-card-icons' src='../icons/trash-can.png'></img></a>
    </div>
  );
};

export default DogBreedCardModal;
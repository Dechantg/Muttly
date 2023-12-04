// DogBreedCardModal.jsx

import React, {useEffect, useState } from 'react';
import Card from './Card';
import '../views/stylesheets/DogBreedCardModal.scss';
import useSessionValidation from '../hooks/useSessionValidation';

const DogBreedCardModal = (props) => {

  const [liked, setLike] = useState(false) 
  const [closeModal, setClose] = useState(true)
  const { isValid, userId } = useSessionValidation();
  const {id, image, shedding, drooling, protectiveness, energy, barking, height, weight, name, description, dog1, dog2, feed} = props

  let likeUrl = null
  let trashUrl = null 
  let shareUrl = null

  useEffect(() => {
    likeUrl = `http://localhost:8088/api/generated/likestatus/${id}?likeStatus=${liked}`
    trashUrl = `http://localhost:8088/api/generated/delete/${id}`
    shareUrl =  `http://localhost:5173/generated/breedbyid/${id}`

  },[liked])


      const handleLike = async () => {
        try {
          const response = await fetch(`${likeUrl}`, {
            credentials: 'include',
          }); 
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        }
      };
  
    

  const onLikeClick = () => {
    setLike(prevLike => !prevLike);
    setTimeout(handleLike, 2000);
  };

  const onShareClick = () => {
    navigator.clipboard.writeText(`${shareUrl}`)
      .then(() => {
        console.log(`Link copied to clipboard: ${shareUrl}`);
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Unable to copy link to clipboard:', error);
        alert('Failed to copy link to clipboard');
      });
  }
  

  const onTrashClick = () => {
    alert("I'm trash?! YOU'RE TRASH! GRRRRRRR!")
    const handleDelete = async () => {
      try {
        const response = await fetch(trashUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', 
        });
  
        if (response.ok) {
          console.log('Breed deleted successfully');
        } else {
          console.error('Failed to delete breed');
        }
      } catch (error) {
        console.error('Error while deleting breed:', error);
      }
    };
    handleDelete()
    // setClose(false)
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
          {isValid && (feed ? <a><img className='modal-card-icons'  onClick={onCloseClick} src='../icons/close.png'></img></a>
            : <a><img className='modal-card-icons'  onClick={onTrashClick} src='../icons/trash-can.png'></img></a>)}
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
            {isValid && <a><img className='modal-card-icons' onClick={onLikeClick} src={
              liked ? '../icons/heart.png'
            : '../icons/heart_empty.png'
          }></img></a>}
            </div>
            {isValid? <a><img className='modal-card-icons' onClick={onShareClick} src='../icons/share.png'></img></a>
            : <a><img className='modal-card-icons'  onClick={onCloseClick} src='../icons/close.png'></img></a>}
        </div>
      </div>}
    </>
  );
};

export default DogBreedCardModal;
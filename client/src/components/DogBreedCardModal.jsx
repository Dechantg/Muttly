// DogBreedCardModal.jsx

import React, {useEffect, useState } from 'react';
import useSessionValidation from '../hooks/useSessionValidation';
import Card from './Card';

import '../views/stylesheets/DogBreedCardModal.scss';

const DogBreedCardModal = (props) => {
  const [ liked, setLike ] = useState(false);
  const [ closeModal, setClose ] = useState(false);
  const { isValid, userId } = useSessionValidation();
  const [favoriteImages, setFavouritedImages ] = useState(null)
  const { id, image, shedding, drooling, protectiveness, energy, barking, height, weight, name, description, dog1, dog2, feed, onClose, isOpen } = props;


  useEffect(() => {
    const fetchFavouritedImages = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/userLiked`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          console.log('data',data.userLiked)
          setFavouritedImages(data.userLiked);
        } else {
          console.error('Failed to fetch favourited images:', response.status);
        };
      } catch (error) {
        console.error('Error fetching favourited images:', error);
      };
    };

    fetchFavouritedImages();
  }, []);

  useEffect(() => {
    const likedDog = findLikesForId(id);
    if (likedDog) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [favoriteImages, id]);

  const findLikesForId = (id) => {
    if (favoriteImages) {
      console.log(favoriteImages)
      const likedDog = favoriteImages.find((dog) => dog.id === id);
      return likedDog !== undefined; // Return true if the dog is found, false otherwise
    }
    return false; // If favoriteImages is not available yet, return false
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:8088/api/generated/likestatus/${id}?likeStatus=${!liked}`, {
        credentials: 'include',
      }); 
      if (response.ok) {
        console.log('Breed liked successfully');
        window.location.reload();
      } else {
        console.error('Failed to like breed');
      }
    } catch (error) {
      console.error('Error while liking breed:', error);
    }
  };

  const onLikeClick = async () => {
    try {
      await handleLike(); 
      setLike((prevLiked) => !prevLiked); // Toggle the liked state immediately after liking
      // Assuming the like status is toggled correctly, proceed with closing after 2 seconds
      setTimeout(() => {
        setClose(true);
      }, 2000);
    } catch (error) {
      console.error('Error while liking breed:', error);
      // If there's an error in liking, consider setting the liked state to its previous value or handle the error accordingly
    }
  };
  
  const onShareClick = () => {
    navigator.clipboard.writeText(`http://localhost:5173/generated/breedbyid/${id}`)
      .then(() => {
        console.log(`Link copied to clipboard: http://localhost:5173/generated/breedbyid/${id}`);
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Unable to copy link to clipboard:', error);
        alert('Failed to copy link to clipboard');
      });
  };
  
  const onTrashClick = () => {
    alert("I'm trash?! YOU'RE TRASH! GRRRRRRR!");

    const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/generated/delete/${id}`, {
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

    handleDelete();
    setClose(true);
  };

  const onCloseClick = () => {
    onClose()
  };

  return (
    <>
      {(isOpen || !closeModal) && 
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
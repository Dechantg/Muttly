// UsersFavouritesPage.jsx

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/UsersFavouritesPage.scss';

const UsersFavouritesPage = () => {
  const [ favouritedImages, setFavouritedImages ] = useState([]);
  const [ selectedImage, setSelectedImage ] = useState(null);

  useEffect(() => {
    const fetchFavouritedImages = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/userLiked`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setFavouritedImages(data);
        } else {
          console.error('Failed to fetch favourited images:', response.status);
        };
      } catch (error) {
        console.error('Error fetching favourited images:', error);
      };
    };

    fetchFavouritedImages();
  }, []);

  const openDogBreedModal = (image) => {
    setSelectedImage(image);
  };

  const closeDogBreedModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="users-favourites-page-container">
      {/* Body of the Page */}
      <div className="page-body">
        {/* Header and Subheader */}
        <div className="header">
          <h1>Your Favourites</h1>
          <h3>Check-out the generated images you have favourited...</h3>
        </div>

        {/* Grid Layout of Images */}
        <div className="image-grid">
          {/* Render a grid of clickable images */}
          {favouritedImages.map((image) => (
            <img
              key={image.id}
              src={image.generated_photo_link}               
              alt={`Image ${image.id}`}
              onClick={() => openDogBreedModal(image)}
            />
            ))}
        </div>

        {/* Dog Breed Card Modal */}
        {selectedImage && (
          <DogBreedCardModal 
            breed={selectedImage}
            id={selectedImage.id}
            image={selectedImage.generated_photo_link}
            shedding={selectedImage.shedding}
            drooling={selectedImage.drooling}
            protectiveness={selectedImage.protectiveness}
            energy={selectedImage.energy}
            barking={selectedImage.barking}
            height={selectedImage.height}
            weight={selectedImage.weight}
            name={selectedImage.name}
            description={selectedImage.description}
            dog1={selectedImage.dog1}
            dog2={selectedImage.dog2}
            feed={selectedImage.feed}
            onclick={closeDogBreedModal}
          />
        )}
      </div>
    </div>
  );
};

export default UsersFavouritesPage;
// UsersFavouritesPage.jsx

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../views/stylesheets/UsersFavouritesPage.scss';

const UsersFavouritesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    setSelectedImage(imageId);
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="users-favourites-page-container">
      {/* Top Navigation Bar */}
      
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
          {[1, 2, 3, 4, ].map((imageId) => (   // unsure if we need to do it like this; 
            <img                                                // can also copy PhotoLabs scss
            key={imageId}
            src={`path/to/image${imageId}.png`}               
            alt={`Image ${imageId}`}
            onClick={() => handleImageClick(imageId)}
            />
            ))}
        </div>

        <div className="images">
          {/* Placeholder elements for Images */}
          {/* Alternative for displaying the images? */}
          <div className="image" onClick={() => handleImageClick(1)}></div> 
          <div className="image" onClick={() => handleImageClick(2)}></div>
          <div className="image" onClick={() => handleImageClick(3)}></div>
          <div className="image" onClick={() => handleImageClick(4)}></div>
          <div className="image" onClick={() => handleImageClick(5)}></div>
        </div> 

        {/* Dog Breed Card Modal */}
        {selectedImage && <DogBreedCardModal breed={selectedImage} onclick={clearSelectedImage}/>}
      </div>

      {/* Bottom Navigation Bar */}
    </div>
  );
};

export default UsersFavouritesPage;
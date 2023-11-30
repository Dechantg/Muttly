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
    <div classNam="users-favourites-page-container">
      {/* Top Navigation Bar */}
      
      {/* Body of the Page */}
      <div className="page-body">
        {/* Header and Subheader */}
        <div className="header">
          <h2>Your Favourites</h2>
          <h3>Check-out the generated images you have favourited...</h3>
        </div>

        {/* Grid Layout of Images */}
        <div className="image-grid">
          {/* Render a grid of clickable images */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((imageId) => (   // unsure if we need to do it like this; think we could just
            <img                                                // copy PhotoLabs's approach + it's scss
            key={imageId}
            src={`path/to/image${imageId}.png`}               
            alt={`Image ${imageId}`}
            onClick={() => handleImageClick(imageId)}
            />
            ))}
        </div>

        {/* Dog Breed Card Modal */}
        {selectedImage && <DogBreedCardModal breed={selectedImage} onclick={clearSelectedImage}/>}
      </div>

      {/* Bottom Navigation Bar */}
    </div>
  );
};

export default UsersFavouritesPage;
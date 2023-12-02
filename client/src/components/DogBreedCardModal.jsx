// DogBreedCardModal.jsx

import React, {useEffect } from 'react';

import '../views/stylesheets/DogBreedCardModal.scss';

const BreedCardModal = () => {

  

  return (
    <div className="dog-breed-card">
      <div className="dog-breed-card-header">
        <div>
          <p>Breed Name</p>
          <p>Protectiveness: ICONS</p>
        </div>
        <img src="/path/or/{}/reference/to/img.png" alt="{breedName}" className="dog-breed-image" />
        <div>
          <p>Height: HEIGHT</p>
          <p>Weight: WEIGHT</p>
        </div>
      </div>

      <div className="dog-breed-card-body">
        <div>
          <p>Shedding: ICONS</p>
          <p>Energy: ICONS</p>
        </div>
        <div>
          <p>Drooling: ICONS</p>
          <p>Barking: ICONS</p>
        </div>
      </div>

      <div className="dog-breed-card-description">
        <p>Breed Description</p>
        <p>breedDescription</p>
      </div>

      <div className="dog-breed-card-footer">
        <p>&copy; 2023  -  Muttly Inc  -  BREEDMAKER Ltd.  -  AlChGr Designs ™</p>
        <p>13/222</p>
      </div>
    </div>
  );
};

export default BreedCardModal;
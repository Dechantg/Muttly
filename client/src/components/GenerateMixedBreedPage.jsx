// GenerateMixedBreedPage.jsx

import React, { useState } from 'react';

import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/GenerateMixedBreedPage.scss';

const GenerateMixedBreedPage = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleBreedSelection = (breed) => {
    setSelectedBreed(breed);
  };

  
  return (
    <div className="generate-mixed-breed-container">
      {/* Top Navigation Bar */}

      {/* Body of the Page */}
      <div className="page-body">
        {/* Left Container with Dropdown */}
        <div className="left-container">
          <label htmlFor="leftDropdown">Select Dog Breed:</label>
          <select id="leftDropdown" onChange={(e) => handleBreedSelection(e.target.value)}>
            {/* Render options for Dog Breeds */}
            <option value="labrador">Labrador</option>
            {/* Unsure how to reference all these db breednames within the component */}
          </select>
        </div>

        {/* Middle Container with the Pawprint Button to Mix the Selected Breeds */}
        <div className="middle-container">
          <div className="generate-button">
            {/* Render pawprint icon here */}
            <p>Generate Mixed</p>
          </div>
        </div>

        {/* Right Container with Dropdown */}
        <div className="right-container">
          <label htmlFor="rightDropdown">Select Dog Breed:</label>
          <select id="rightDropdown" onChange={(e) => handleBreedSelection(e.target.value)}>
            {/* Render options for Dog Breeds */}
            <option value="germansheperd">German Shepherd</option>
            {/* Unsure how to reference all these db breednames within the component */}
          </select>
        </div>

        {/* Dog Breed Card Modal */}
        {selectedBreed && <DogBreedCardModal breed={selectedBreed} />}
      </div>
    </div>
  );
};

export default GenerateMixedBreedPage;
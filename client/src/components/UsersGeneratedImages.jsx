// UsersGeneratedImages.jsxnews-feed-container-

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DogBreedCardModal from './DogBreedCardModal';
import useSessionValidation from '../hooks/useSessionValidation';
import '../views/stylesheets/UsersFavouritesPage.scss';

const UsersFavouritesPage = () => {
  const [usersGeneratedImages, setUsersGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isValid, userId, isLoading } = useSessionValidation();
  const [isDogBreedCardModalOpen, setDogBreedCardModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsersGeneratedImages = async () => {
      try {
        const response = await fetch(`http://localhost:8088/api/generated/breedbyuserid/${userId}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUsersGeneratedImages(data); 
          console.log('Users Generated Images state:', usersGeneratedImages);
          console.log('Users Generated Images:', data);
        } else {
          console.error('Failed to fetch users generated images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users recently generated images:', error);
      }
    };

    fetchUsersGeneratedImages();
  }, []);

  const openDogBreedModal = (image) => {
    setSelectedImage(image);
  };

  const closeDogBreedModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="users-generated-images-page-container">
      {/* Top Navigation Bar */}
      
      {/* Body of the Page */}
      <div className="page-body">
        {/* Header and Subheader */}
        <div className="header">
          <h1>Your Generated Images</h1>
          <h3>Check-out the generated images you have generated...</h3>
        </div>

        {/* Grid Layout of Images */}
        <div className="image-grid">
          {/* Render a grid of clickable images */}
          {usersGeneratedImages.map((image) => (
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
            id={selectedImage.id}
            image={selectedImage.generated_photo_link}
            shedding={{shedding : selectedImage.shedding}}
            drooling={{drooling : selectedImage.drooling}}
            protectiveness={{protectiveness : selectedImage.protectiveness}}
            energy={{energy : selectedImage.energy}}
            barking={{barking : selectedImage.barking}}
            height={[
              selectedImage.max_height_female,
              selectedImage.max_height_male,
              selectedImage.min_height_female,
              selectedImage.min_height_male,
            ]} 
            weight={[ 
              selectedImage.max_weight_female,
              selectedImage.max_weight_male,
              selectedImage.min_weight_female,
              selectedImage.min_weight_male
            ]}
            name={selectedImage.name}
            description={selectedImage.description}
            dog1={selectedImage.dog1}
            dog2={selectedImage.dog2}
            onClose={closeDogBreedModal}
            isOpen={isDogBreedCardModalOpen} 
            feed = {true}
          />
        )}
      </div>
    </div>
  );
};

export default UsersFavouritesPage;
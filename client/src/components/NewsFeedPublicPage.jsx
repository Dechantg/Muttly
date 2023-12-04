// NewsFeedPublicPage.jsx

import React, { useState, useEffect } from 'react';
import SignInModal from './SignInModal';
import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/NewsFeedPublicPage.scss';
// import mostLikedBreeds from '../../../server/database/queries/get_most_liked_breeds';

const NewsFeedPublicPage = () => {

  const [mostPopularImages, setMostPopularImages] = useState([]);
  const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);
  const [isDogBreedCardModalOpen, setDogBreedCardModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // !isLoading && !isValid

  const openDogBreedCardModal = (event, image) => {
    console.log('Click event:', event);

    if (image && image.generated_photo_link && image.id) {
      
      // setSelectedImage(clickedImageSrc);
      setSelectedImage(image)
      // setDogBreedCardModalOpen(true);
      
      console.log('Image clicked!', image);
      console.log('Clicked image ID:', image.id);
      console.log('Selected image:', image.generated_photo_link)
      console.log('Clicked image element:', event.target)
    } else {
      console.error('Image object is undefined');
    }
  };

  const closeDogBreedCardModal = () => {
    setSelectedImage(null);
  };
  
  useEffect(() => {
    const fetchMostPopularImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/mostliked');
        const data = await response.json();
        setMostPopularImages(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching most popular images:', error);
      }
    };
  
    const fetchRecentlyGeneratedImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/mostrecent');
        const data = await response.json();
        setRecentlyGeneratedImages(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };
  
    // Fetch data when the component mounts
    fetchMostPopularImages();
    fetchRecentlyGeneratedImages();
  }, []);

  console.log("Here are the most liked in a pretty object: ", mostPopularImages);
  console.log("Here are the most recent in a not as pretty object: ", recentlyGeneratedImages);
  console.log('selectedImage', selectedImage);
  console.log('mostPopularImages', mostPopularImages);

  return (
    <div className="news-feed-container">
      <h1>Top Dogs & New Pups</h1>
      <h3>Wag-worthy moments from the stars and the rising!</h3>
      {/* News Feed Public Content */}
      <div className="news-feed-content">
        <h2 className="most-popular-images-text">Most Popular Generated Images...</h2>
        <div className="most-popular-images-row">
          {mostPopularImages.map((image) => (
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Dog ${image.name}`}
              className={`most-popular-images-thumbnail ${selectedImage ? 'clicked' : ''}`}
              onClick={(event) => openDogBreedCardModal(event, image)}
            />
          ))}
        </div>

        <h2 className="recently-generated-images-text">Recently Generated Images...</h2>  
        <div className="recently-generated-images-row">
          {recentlyGeneratedImages.map((image) => (
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Dog ${image.name}`}
              className={`recently-generated-images-thumbnail ${selectedImage ? 'clicked' : ''}`}
              onClick={(event) => openDogBreedCardModal(event, image)}
            />
          ))}
        </div>

        {/* Dog Breed Card Modal */}
        {selectedImage && (
          <DogBreedCardModal 
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
            onClose={closeDogBreedCardModal} />
            )}
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
// NewsFeedPublicPage.jsx

import React, { useState, useEffect } from 'react';

import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/NewsFeedPublicPage.scss';

const NewsFeedPublicPage = () => {

  const [ mostPopularImages, setMostPopularImages ] = useState([]);
  const [ recentlyGeneratedImages, setRecentlyGeneratedImages ] = useState([]);
  const [ isDogBreedCardModalOpen, setDogBreedCardModalOpen ] = useState(false);
  const [ selectedImage, setSelectedImage ] = useState(false);

  const openDogBreedCardModal = (event, image) => {
    console.log('Click event:', event);

    if (image && image.generated_photo_link && image.id) {

      setSelectedImage(image);
      setDogBreedCardModalOpen(true);
      
      // console.log('Image clicked!', image);
      // console.log('Clicked image ID:', image.id);
      // console.log('Selected image:', image.generated_photo_link)
      // console.log('Clicked image element:', event.target)
    } else {
      console.error('Image object is undefined');
    };
  };

  const closeDogBreedCardModal = () => {
    setDogBreedCardModalOpen(false);
  };
  
  useEffect(() => {
    const fetchMostPopularImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/mostliked');
        const data = await response.json();
        const popularImages = data.topLikedDetailsResult
        setMostPopularImages(popularImages);
        console.log(popularImages);
      } catch (error) {
        console.error('Error fetching most popular images:', error);
      };
    };
  
    const fetchRecentlyGeneratedImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/mostrecent');
        const data = await response.json();
        const recentlyGen = data.result

        setRecentlyGeneratedImages(recentlyGen);

        console.log(recentlyGen);
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };
  
    fetchMostPopularImages();
    fetchRecentlyGeneratedImages();
  }, []);

  // console.log("Here are the most liked in a pretty object: ", mostPopularImages);
  // console.log("Here are the most recent in a not as pretty object: ", recentlyGeneratedImages);
  // console.log('selectedImage', selectedImage);
  // console.log('mostPopularImages', mostPopularImages);

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

        {/* Recently Generated Images */}
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
        {isDogBreedCardModalOpen && (
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
            feed={true}
            onClose={closeDogBreedCardModal}
            isOpen={isDogBreedCardModalOpen} 
          />
        )}
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
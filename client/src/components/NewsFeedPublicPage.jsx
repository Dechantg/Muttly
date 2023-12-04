// NewsFeedPublicPage.jsx

import React, { useState, useEffect } from 'react';
import SignInModal from './SignInModal';
import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/NewsFeedPublicPage.scss';

const NewsFeedPublicPage = () => {

  const [mostPopularImages, setMostPopularImages] = useState([]);
  // console.log(setMostPopularImages);
  const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);
  // console.log(setRecentlyGeneratedImages);
  const [isDogBreedCardModalOpen, setDogBreedCardModalOpen] = useState(false);
  // console.log(setDogBreedCardModalOpen);
  const [selectedImage, setSelectedImage] = useState(null);

  const openDogBreedCardModal = (image) => {
    setSelectedImage(image.generated_photo_link);
    setDogBreedCardModalOpen(true);
  };

  const closeDogBreedCardModal = () => {
    setSelectedImage(null);
  };

  const fetchData = async (images) => {
    try {
      const responce = await fetch(`http://localhost:8088/api/${images}`);
      const data = await responce.json();

      return data;      
    } catch (error) {
      console.error('Error fetch data', error);
    }
  };

  useEffect(() => {
    const fetchMostPopularImages = async () => {
      try {
        const data = await fetchData('mostliked');
        setMostPopularImages(data);
      } catch (error) {
        console.error('Error fetching most popular images:', error);
      }
    };
  
    const fetchRecentlyGeneratedImages = async () => {
      try {
        const data = await fetchData('mostrecent');
        setRecentlyGeneratedImages(data);
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

  return (
    <div className="news-feed-container">
      <h1>Top Dogs & New Pups</h1>
      <h3>Wag-worthy moments from the stars and the rising!</h3>
      {/* News Feed Public Content */}
      <div className="news-feed-content">
        <h2 className="most-popular-images-text">Most Popular Generated Images...</h2>
        <div className="most-popular-images-row">
          {mostPopularImages.slice(0, 5).map((image) => (
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Dog ${image.id}`}
              className={`most-popular-images-thumbnail ${selectedImage ? 'clicked' : ''}`}
              onClick={() => openDogBreedCardModal(image)}
            />
          ))}
        </div>

        <h2 className="recently-generated-images-text">Recently Generated Images...</h2>  
        <div className="recently-generated-images-row">
          {recentlyGeneratedImages.slice(0, 5).map((image) => (
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Dog ${image.id}`}
              className={`recently-generated-images-thumbnail ${selectedImage ? 'clicked' : ''}`}
              onClick={() => openDogBreedCardModal(image)}
            />
          ))}
        </div>

        {/* Dog Breed Card Modal */}
        {selectedImage && <DogBreedCardModal onClose={closeDogBreedCardModal} />}
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
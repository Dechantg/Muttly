// NewsFeedPublicPage.jsx

import React, { useState, useEffect } from 'react';
import SignInModal from './SignInModal';

import '../views/stylesheets/NewsFeedPublicPage.scss';

const NewsFeedPublicPage = () => {

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [mostPopularImages, setMostPopularImages] = useState([]);
const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };


  const fetchData = async (images) => {
    try {
      const responce = await fetch(`http://localhost:8088/api/${images}`);
      const data = await responce.json();

      return data;      
    } catch (error) {
      console.error('Error fetch data', error);
    }
  }
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
      {/* News Feed Public Content */}
      <div className="news-feed-content">
        <h2>Most Popular Generated Images</h2>
        <div className="image-row">
          {/* Render top 5 images here */}
          {/* Each image thumbnail can be clickable - for the image modal */}
          {mostPopularImages.map((image) => (
            <img 
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="image-thumbnail"
              // onClick handler for modal & other actions? 
            />
          ))}
        </div>

        <h2>Recently Generated Images</h2>
        <div className="image-row">
          {/* Render ~10 images here */}
          {/* Each image thumbnail can be clickable - for the image modal */}
          {recentlyGeneratedImages.map((image) => (
            <img 
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="image-thumbnail"
              // onClick handler for the modal & other actions?
            />
          ))}
        </div>

        {/* Sign In Button */}
        <div className="sign-in-button" onClick={openSignInModal}>
          {/* Render the pawprint icon here */}
        </div>

        {/* Sign In Modal */}
        {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
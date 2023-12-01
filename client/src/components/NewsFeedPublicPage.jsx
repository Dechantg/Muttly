// NewsFeedPublicPage.jsx

import React, { useState } from 'react';
import SignInModal from './SignInModal';

import '../views/stylesheets/NewsFeedPublicPage.scss';

const NewsFeedPublicPage = () => {

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const mostPopularImages = [];

  const recentlyGeneratedImages = [];

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
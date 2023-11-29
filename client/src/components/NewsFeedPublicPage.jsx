// NewsFeedPublicPage.jsx

import React, { useState } from 'react';
import TopNavigationBar from './NavigationBarTop';
import BottomNaviationBar from './NavigationBarBottom';
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

  return (
    <div className="news-feed-container">
      {/* Top Navigation Bar  */}
      <TopNavigationBar />

      {/* News Feed Public Content */}
      <div className="news-feed-content">
        <h2>Most Popular Generated Images</h2>
        <div className="image-row">
          {/* Render top 5 images here */}
          {/* Each image thumbnail can be clickable - for the image modal */}
        </div>

        <h2>Recently Generated Images</h2>
        <div className="image-row">
        {/* Render ~10 images here */}
        {/* Each image thumbnail can be clickable - for the image modal */}
        </div>

        {/* Sign In Button */}
        <div className="sign-in-button" onClick={openSignInModal}>
          {/* Render the pawprint icon here */}
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNaviationBar />

        {/* Sign In Modal */}
        {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
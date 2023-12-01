// NewsFeedUserPage.jsx

import React from 'react';
import { useHistory } from 'react-reouter-dom';
import '../views/stylesheets/NewsFeedUserPage';

const NewsFeedUserPage = () => {
  const history = useHistory();
  // new useHistory hook implementation - correct syntax/pathways as needed
  const redirectToGeneratePage = () => {
    history.push('/path/to/generate-mixed-breed-page');
  };

  return (
    <div className="news-feed-user-container">
      {/* News Feed Content */}
      {/* Logged in User Specific Row */}
      <h2>Your Favourites</h2>
      <div className="image-row">
        {/* Render 7 images */}
        {/* Each thumbnail image is clickable */}
      </div>

      <div className="news-feed-content">
        <h2>Most Popular Generated Images</h2>
        <div className="image-row">
          {/* Render at least 5 images */}
          {/* Each thumbnail image is clickable */}
        </div>

        <h2>Recently Generated Images</h2>
        <div className="image-row">
          {/* Render 10 images */}
          {/* Each thumbnail image is clickable */}
        </div>


        {/* Generate Your Own Breed Button */}
        <div className="generate-button" onClick={redirectToGeneratePage}>
          {/* Render pawprint icon */}
          <p>Generate Your Own Breed</p>
        </div>

        {/* Logged in User Specific Row */}
        <h2>Your Generations</h2>
        <div className="image-row">
          {/* Render 5 images */}
          {/* Each thumbnail image is clickable */}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
    </div>
  );
};

export default NewsFeedUserPage;
// NewsFeedUserPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../views/stylesheets/NewsFeedUserPage';

const NewsFeedUserPage = () => {
  const navigate = useNavigate();

  const [usersfavouritedImages, setUsersFavouritedImages] = useState([]);
  const [mostPopularImages, setMostPopularImages] = useState([]);
  const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);
  const [usersGeneratedImages, setUsersGeneratedImages] = useState([]);

  useEffect(() => {
    const fetchUsersFavouritedImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/userLiked', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUsersFavouritedImages(data.slice(0, 5));
        } else {
          console.error('Failed to fetch favourited images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching favourited images:', error);
      }
    };

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

    const fetchUsersGeneratedImages = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/generated/breedbyuserid');
        const data = await response.json();
        setUsesrGeneratedImages(data.slice(0, 5));
        console.log(data);
      } catch (error) {
        console.error('Error fetching users recently generated images:', error);
      }
    };

    fetchUsersFavouritedImages();
    fetchMostPopularImages();
    fetchRecentlyGeneratedImages();
    fetchUsersGeneratedImages();
  }, []);

  const redirectToGeneratePage = () => {
    navigate('/generate');
  };

  return (
    <div className="news-feed-user-container">
      {/* News Feed Content */}
      {/* Logged in User Specific Row */}
      <h2>Your Favourites</h2>
      <div className="users-favourited-images-row">
        {/* Render 7 images */}
        {/* Each thumbnail image is clickable */}
        {usersfavouritedImages.map((image) => (
          <img 
            key={image.id}
            src={image.generated_photo_link}
            alt={`Image ${image.id}`}
          />
        ))}
      </div>

      <div className="news-feed-content">
        <h2>Most Popular Generated Images</h2>
        <div className="most-popular-images-row">
          {/* Render at least 5 images */}
          {/* Each thumbnail image is clickable */}
          {mostPopularImages.map((image) => {
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Image ${image.id}`}
            />
          })}
        </div>

        <h2>Recently Generated Images</h2>
        <div className="recently-generated-images-row">
          {/* Render 10 images */}
          {/* Each thumbnail image is clickable */}
          {recentlyGeneratedImages.map((image) => {
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Image ${image.id}`}
            />
          })}
        </div>

        {/* Generate Your Own Breed Button */}
        <div className="generate-button" onClick={redirectToGeneratePage}>
          {/* Render pawprint icon */}
          <p>Generate Your Own Breed</p>
        </div>

        {/* Logged in User Specific Row */}
        <h2>Your Generations</h2>
        <div className="users-generated-images-row">
          {/* Render 5 images */}
          {/* Each thumbnail image is clickable */}
          {usersGeneratedImages.map((image) => {
            <img 
              key={image.id}
              src={image.generated_photo_link}
              alt={`Image ${image.id}`}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsFeedUserPage;
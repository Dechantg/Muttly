import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DogBreedCardModal from './DogBreedCardModal';
import FeedRows from './FeedRows';

import '../views/stylesheets/NewsFeedPage.scss';

const NewsFeedUserPage = () => {
  const [usersfavouritedImages, setUsersFavouritedImages] = useState([]);
  const [mostPopularImages, setMostPopularImages] = useState([]);
  const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);
  const [usersGeneratedImages, setUsersGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(false);
  const [isDogBreedCardModalOpen, setDogBreedCardModalOpen] = useState(false);
  const { userId } = useAuth();
  const navigate = useNavigate();


  const openDogBreedCardModal = (event, image) => {
    console.log('Click Mv!ent:', event);

    if (image && image.generated_photo_link && image.id) {
      setSelectedImage(image);
      setDogBreedCardModalOpen(true);
    } else {
      console.error('Image object is undefined');
    }
  };

  const closeDogBreedCardModal = () => {
    setDogBreedCardModalOpen(false);
  };

  useEffect(() => {
    const fetchUsersFavouritedImages = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api'}/userLiked`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          console.log('fav data:', data);
          const usersFavourites = data.userLiked;
          const favouritesExtraDetails = data.extraDetails;

          favouritesExtraDetails.forEach(detail => {
            const indexToUpdate = usersFavourites.findIndex(image => image.id === detail.genid);

            if (indexToUpdate !== -1) {
              usersFavourites[indexToUpdate].dog1 = detail.breedone;
              usersFavourites[indexToUpdate].dog2 = detail.breedtwo;
            }
          });
          setUsersFavouritedImages(usersFavourites);
          console.log('Users favorites state:', usersFavourites);
        } else {
          console.error('Failed to fetch favourited images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching favourited images:', error);
      }
    };

    const fetchMostPopularImages = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api'}/mostliked/big`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          const mostPopular = data.topLikedDetailsResult;
          const popularExtraDetails = data.extraDetails;

          popularExtraDetails.forEach(detail => {
            const indexToUpdate = mostPopular.findIndex(image => image.id === detail.genid);

            if (indexToUpdate !== -1) {
              mostPopular[indexToUpdate].dog1 = detail.breedone;
              mostPopular[indexToUpdate].dog2 = detail.breedtwo;
            }
          });
          setMostPopularImages(mostPopular);
          console.log('Most Popular Images state:', mostPopular);
        } else {
          console.error('Failed to fetch most popular images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching most popular images:', error);
      }
    };

    const fetchRecentlyGeneratedImages = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api'}/mostrecent`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          const recentlyGen = data.result;
          const recentExtraDetails = data.extraDetails;

          recentExtraDetails.forEach(detail => {
            const indexToUpdate = recentlyGen.findIndex(image => image.id === detail.genid);

            if (indexToUpdate !== -1) {
              recentlyGen[indexToUpdate].dog1 = detail.breedone;
              recentlyGen[indexToUpdate].dog2 = detail.breedtwo;
            }
          });
          setRecentlyGeneratedImages(recentlyGen);
        } else {
          console.error('Failed to fetch recently generated images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };

    const fetchUsersGeneratedImages = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api'}/generated/breedbyuserid/${userId}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          const usersGeneratedImagesFeed = data.generatedBreeds;
          const usersGenExtraDetails = data.extraDetails;

          usersGenExtraDetails.forEach(detail => {
            const indexToUpdate = usersGeneratedImagesFeed.findIndex(image => image.id === detail.genid);

            if (indexToUpdate !== -1) {
              usersGeneratedImagesFeed[indexToUpdate].dog1 = detail.breedone;
              usersGeneratedImagesFeed[indexToUpdate].dog2 = detail.breedtwo;
            }
          });
          setUsersGeneratedImages(usersGeneratedImagesFeed);
          console.log('Users Generated Images state:', usersGeneratedImages);
          console.log('Users Generated Images:', data);
        } else {
          console.error('Failed to fetch users generated images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users recently generated images:', error);
      }
    };

    fetchUsersFavouritedImages();
    fetchMostPopularImages();
    fetchRecentlyGeneratedImages();
    fetchUsersGeneratedImages();
  }, []);


  const placeholderCountFavorites = Math.max(0, 5 - usersfavouritedImages.length);
  const placeholderCountUsersGenerated = Math.max(0, 6 - usersGeneratedImages.length);

  const redirectToGeneratePage = () => {
    navigate('/generate');
  };

  const redirectToUsersFavouritesPage = () => {
    navigate('/usersfavourites');
  };

  const redirectToUsersGeneratedImagesPage = () => {
    navigate('/usersgeneratedimages');
  };

  const redirectToMostPopularGeneratedImagesPage = () => {
    navigate('/mostpopulargeneratedimages');
  };

  const redirectToRecentlyGeneratedImagesPage = () => {
    navigate('/recentlygeneratedimages');
  };

  const reversedFavoutireImages = [...usersfavouritedImages].reverse();
  const reversedRecentlyGeneragedImages = [...recentlyGeneratedImages].reverse();


  return (
    <div className="news-feed-container">


      <div className="news-feed-content">

        <div>
          <h2
            className="feed-clickable-title"
            onClick={redirectToUsersFavouritesPage}>
            Your Favourites <img className='bone-animate' src='../icons/bone.png' />
          </h2>

          <FeedRows
            feedImages={reversedFavoutireImages}
            placeholderCount={placeholderCountFavorites}
            openModal={openDogBreedCardModal}
          />
        </div>

        <div>
          <h2
            className="feed-clickable-title"
            onClick={redirectToMostPopularGeneratedImagesPage}>
            Most Popular Generated Images <img className='bone-animate' src='../icons/bone.png' />
          </h2>

          <FeedRows
            feedImages={mostPopularImages}
            placeholderCount={placeholderCountFavorites}
            openModal={openDogBreedCardModal}
          />
        </div>

        <div>
          <h2
            className="userfeed-clickable-title"
            onClick={redirectToRecentlyGeneratedImagesPage}>
            Recently Generated Images <img className='bone-animate' src='../icons/bone.png' />
          </h2>

          <FeedRows
            feedImages={reversedRecentlyGeneragedImages}
            placeholderCount={placeholderCountFavorites}
            openModal={openDogBreedCardModal}
          />
        </div>



        <div>
          <h2
            className="userfeed-clickable-title"
            onClick={redirectToUsersGeneratedImagesPage}>
            Your Generations <img className='bone-animate' src='../icons/bone.png' />
          </h2>

          <FeedRows
            feedImages={usersGeneratedImages}
            placeholderCount={placeholderCountUsersGenerated}
            openModal={openDogBreedCardModal}
          />
        </div>


      </div>
      <div className="news-feed-container-generate">
        {/* Generate Your Own Breed Button */}
        <span className='breed-title'><h1>Generate Your Own Breed</h1></span>
        <img
          className='generate-button'
          title="Click Me!"
          src='../icons/paw_button.png'
          onClick={redirectToGeneratePage}
        />

      </div>


      {isDogBreedCardModalOpen && (
        <DogBreedCardModal
          id={selectedImage.id}
          image={selectedImage.generated_photo_link}
          shedding={{ shedding: selectedImage.shedding }}
          drooling={{ drooling: selectedImage.drooling }}
          protectiveness={{ protectiveness: selectedImage.protectiveness }}
          energy={{ energy: selectedImage.energy }}
          barking={{ barking: selectedImage.barking }}
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
  );
};

export default NewsFeedUserPage;
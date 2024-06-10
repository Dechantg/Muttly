import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedRows from './FeedRows';
import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/NewsFeedPage.scss';

const NewsFeedPublicPage = () => {
  const [mostPopularImages, setMostPopularImages] = useState([]);
  const [recentlyGeneratedImages, setRecentlyGeneratedImages] = useState([]);
  const [isDogBreedCardModalOpen, setDogBreedCardModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);

  const navigate = useNavigate();

  const openDogBreedCardModal = (event, image) => {

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
        const response = await fetch(`${import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api'}/mostrecent`);
        const data = await response.json();
        const recentlyGen = data.result;
        const extraRecentData = data.extraDetails;

        extraRecentData.forEach(detail => {
          const indexToUpdate = recentlyGen.findIndex(image => image.id === detail.genid);

          if (indexToUpdate !== -1) {
            recentlyGen[indexToUpdate].dog1 = detail.breedone;
            recentlyGen[indexToUpdate].dog2 = detail.breedtwo;
          }
        });
        setRecentlyGeneratedImages(recentlyGen);
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };

    fetchMostPopularImages();
    fetchRecentlyGeneratedImages();
  }, []);

  const placeholderCountFavorites = Math.max(0, 5 - mostPopularImages.length);

  const redirectToMostPopularGeneratedImagesPage = () => {
    navigate('/mostpopulargeneratedimages');
  };

  const redirectToRecentlyGeneratedImagesPage = () => {
    navigate('/recentlygeneratedimages');
  };

  const reversedRecentlyGeneragedImages = [...recentlyGeneratedImages].reverse();


  return (
    <div className="news-feed-user-container">


      <div className="news-feed-content">
        <h1>Top Dogs & New Pups</h1>
        <h2>Wag-worthy moments from the stars and the rising!</h2> <br />
        <div className="news-feed-content">

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
              className="feed-clickable-title"
              onClick={redirectToRecentlyGeneratedImagesPage}>
              Recently Generated Images <img className='bone-animate' src='../icons/bone.png' />
            </h2>

            <FeedRows
              feedImages={reversedRecentlyGeneragedImages}
              placeholderCount={placeholderCountFavorites}
              openModal={openDogBreedCardModal}
            />
          </div>



          {/* Dog Breed Card Modal */}
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
      </div>
    </div>
  );
};

export default NewsFeedPublicPage;
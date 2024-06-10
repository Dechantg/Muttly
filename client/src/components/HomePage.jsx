import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageCarosel";
import SignInModal from "./SignInModal";

import '../views/stylesheets/HomePage.scss';

const HomePage = () => {
  const images = [
    'BoxerHusky.jpg',
    'BulldogBorder_Collie.jpg',
    'Cavalier_King_Charles_SpanielGolden.jpg',
    'DachshundGerman_Shepard.jpg',
    'DalmatianLabrador_Retriever.jpg',
    'Golden_RetrieverBorder_Collie.jpg',
    'Great_DaneBernese_Mountain_Dog.jpg',
    'Miniature_SchnauzerAlaskan_Malamute.jpg',
    'Poodle_StandardBoston_Terrier.jpg',
    'Shiba_Inupug.jpg'
  ];

  const [loggedIn, loggedStatus] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);


  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSignInClick = () => {
    if (!loggedIn) {
      openSignInModal();
    } else {
      loggedStatus(false);
      history.push('/');
    }
  };

  return (
    <div className="homepage">
      <div className="main">
        <div className="home_main">
          <h1>WELCOME TO MUTTLY !</h1>
          <p>Unleash your imagination, create your own breed, and join us in the symphony of barks - where every mutt has its day !</p>
        </div>
        <div className="dog-container">
          <ImageContainer images={images} />
        </div>
        {/* <div className="dog_container">
            {images.map((image, idx) => (
              <img
                key={idx}
                className={`dog_home ${idx === index ? 'active fade-in' : ''}`}
                src={`../mock_dogs/${image}.jpg`}
                alt={`Dog ${idx + 1}`}
              />
            ))}
          </div> */}
        <div className="feed-link">
          <Link to="/newsfeed" className="to-newsfeed-public-link">
            <button className="public-newsfeed-button">Em-bark on a journey with the pack today !</button>
          </Link>
        </div>
      </div>

      <div className="sign_in">
        <img onClick={handleSignInClick} src="../icons/paws_pink.png" />
        <p>Sign In</p>
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default HomePage;
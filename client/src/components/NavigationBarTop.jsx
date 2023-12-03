import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './SignInModal';
import '../views/stylesheets/NavigationBarTop.scss';
import useSessionValidation from '../hooks/useSessionValidation'; 



const NavigationBarTop = () => {

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isLoggedIn, setLogIn] = useState(false)
  const history = useLocation();
  const { isValid, userId } = useSessionValidation();

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSignInClick = () => {
    if (!isValid) {
      openSignInModal();
      setLogIn(true)
    } else {
      loggedStatus(false);
      history.push('/');
    }
  };

  return (
    <div className="top-navigation-bar">
      <div className="left-side">
        <Link to="/news-feed" className="logo-link">
          <img src="../icons/paws_pink.png" alt="Muttly Logo" className="muttly-logo" />
        </Link>
        <div>
          <h1 className="muttly-brand">Muttly</h1>
          <h2 className="muttly-slogan">Unlimited paw-sibilities... Tailored Tails, Your Way!</h2>
        </div>
      </div>
      <div className="right-side">
        <a className ="login-tag" onClick={handleSignInClick}>
          {isLoggedIn ? (
            <img src="../icons/bark_out.png" alt="Muttly Logo" className="logout-icon" />
          ) : (
            <img src="../icons/bark_in.png" alt="Muttly Logo" className="login-icon" />
          )}
        </a>
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default NavigationBarTop;
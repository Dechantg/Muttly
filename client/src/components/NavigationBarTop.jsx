// NavigationBarTop.jsx

import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSessionValidation from '../hooks/useSessionValidation'; 

import SignInModal from './SignInModal';

import '../views/stylesheets/NavigationBarTop.scss';

const NavigationBarTop = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const { isValid, userId, isLoading } = useSessionValidation();
  const [isLoggedIn, setLogIn] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isValid, 'isValid')
    isValid ? setLogIn(true) : setLogIn(false) 
    }
  ,[isLoading, isValid, isLoggedIn]);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSignInClick = () => {
    if (!isLoggedIn) {
      openSignInModal();
    };
  }; 

  const handleSignOut = async () =>  {
    try {
      const response = await fetch('http://localhost:8088/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
          alert('Logout Failed. Please try again.');
        throw new Error('Sign-in failed');
      };
      window.location.reload();
    } catch (error) {
      console.error('Error during sign-out:', error.message);
    };
  };

  return (
    <div className="top-navigation-bar">
      <div className="left-side">
        {isLoggedIn ? (
          <Link to="/newsfeeduser" className="logo-link">
            <img src="../icons/paws_pink.png" alt="Muttly Logo" className="muttly-logo" />
          </Link>
        ) : (
          <Link to="/" className="logo-link">
            <img src="../icons/paws_pink.png" alt="Muttly Logo" className="muttly-logo" />
          </Link>
        )}
        <div>
          <h1 className="muttly-brand">Muttly</h1>
          <h2 className="muttly-slogan">Unlimited paw-sibilities... Tailored Tails; Your Way !</h2>
        </div>
      </div>
      <div className="right-side">
        {isLoggedIn ? (
          <div className='log-container'>
            <button className ="logout-btn" onClick={handleSignOut}> BARK OUT! </button>
            <img src="../icons/bark-out.png" alt="Muttly Logo" className="login-icon" /> 
          </div>
        ) : (
          <div className='log-container'>
            <button className ="login-btn" onClick={handleSignInClick}> WOOF IN! </button>
            <img src="../icons/woof-in.png" alt="Muttly Logo" className="login-icon" /> 
          </div>
        )}
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default NavigationBarTop;
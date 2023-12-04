import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './SignInModal';
import '../views/stylesheets/NavigationBarTop.scss';
import useSessionValidation from '../hooks/useSessionValidation'; 



const NavigationBarTop = (props) => {

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const history = useLocation();
  const { isValid, userId, isLoading } = useSessionValidation();
  const [isLoggedIn, setLogIn] = useState(null)

  useEffect(() => {
    console.log(isValid, 'isValid')
    isValid ? setLogIn(true) : setLogIn(false) 
    }
  ,[isLoading, isValid]);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSignInClick = () => {
    if (!isLoggedIn) {
      openSignInModal();
    } 
  }; 

  const handleSignOut = async () =>  {
    try {
      const response = await fetch('http://localhost:8088/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          alert('Incorrect email or password. Please try again.');
        } else {
          alert('Sign-in failed. Please try again later.');
        }
        throw new Error('Sign-in failed');
      }
  
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  }

  return (
    <div className="top-navigation-bar">
      <div className="left-side">
        <Link to="/newsfeed" className="logo-link">
          <img src="../icons/paws_pink.png" alt="Muttly Logo" className="muttly-logo" />
        </Link>
        <div>
          <h1 className="muttly-brand">Muttly</h1>
          <h2 className="muttly-slogan">Unlimited paw-sibilities... Tailored Tails, Your Way!</h2>
        </div>
      </div>
      <div className="right-side">
          {isLoggedIn ? (
                    <a className ="login-tag"> <img src="../icons/bark_out.png" alt="Muttly Logo" className="logout-icon" /> </a>
          ) : (
            <a className ="login-tag" onClick={handleSignInClick}> <img src="../icons/bark_in.png" alt="Muttly Logo" className="login-icon" /> </a>
          )}
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default NavigationBarTop;
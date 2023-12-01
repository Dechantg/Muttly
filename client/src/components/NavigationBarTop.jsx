import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './SignInModal';
import '../views/stylesheets/NavigationBarTop.scss';

const NavigationBarTop = () => {

  const [loggedIn, loggedStatus] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const history = useLocation();

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
        <buton className="sign-in-out-button" onClick={handleSignInClick}>
          {loggedIn ? (
            <img src="../icons/bark_out.png" alt="Muttly Logo" className="login-icon" />
          ) : (
            <img src="../icons/bark_in.png" alt="Muttly Logo" className="logout-icon" />
          )}
        </buton>
      </div>
      {/* Render the SignInModal if isSignInModalOpen is true */}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default NavigationBarTop;


{/* <Link to="/signin" className="sign-in-out-button">
{ loggedIn ? 
  <img src="../icons/bark_out.png" alt="Muttly Logo" className="login_icon" />
  :<img src="../icons/bark_in.png" alt="Muttly Logo" className="login_icon" />
}
</Link> */}
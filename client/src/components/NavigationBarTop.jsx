import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../views/stylesheets/NavigationBarTop.scss';

const NavigationBarTop = () => {

  const [loggedIn, loggedStatus] = useState(false)

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
        <Link to="/signin" className="sign-in-out-button">
        { loggedIn ? 
          <img src="../icons/bark_out.png" alt="Muttly Logo" className="login_icon" />
          :<img src="../icons/bark_in.png" alt="Muttly Logo" className="login_icon" />
        }
        </Link>
      </div>
    </div>
  );
};

export default NavigationBarTop;
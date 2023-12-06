// NavigationBarBottom.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useSessionValidation from '../hooks/useSessionValidation';

import '../views/stylesheets/NavigationBarBottom.scss';

const NavigationBarBottom = (props) => {
  const { isValid, userId, isLoading } = useSessionValidation();
  const [ isLoggedIn, setLogIn ] = useState(isValid);

  useEffect(() => {
    // console.log(isValid, 'isValid');
    isValid ? setLogIn(true) : setLogIn(false) ;
    }
  ,[isLoading, isValid]);

  return (
    <div className="bottom-navigation-bar">
      <Link to="/contact" className="nav-link">
      <img src="../icons/paws_pink.png" className="paws-icon-nav" /> Contact Us <img src="../icons/paws_pink.png" className="paws-icon-nav" />
      </Link>
      <Link to="/about" className="nav-link">
      <img src="../icons/paws_pink.png" className="paws-icon-nav" /> About Us <img src="../icons/paws_pink.png" className="paws-icon-nav" />
      </Link>
      <Link to={isLoggedIn ?"/newsfeeduser" : "/signup" } className="nav-link">
        {isLoggedIn ? (
          <>
            <img src="../icons/bone.png" alt="Bone Icon" className="bone-icon-nav" /> Your Feed <img src="../icons/bone.png" alt="Bone Icon" className="bone-icon-nav" />
          </>
        ) : (
          <>
            <img src="../icons/paws_pink.png" alt="Paws Icon" className="paws-icon-nav" /> Sign Up <img src="../icons/paws_pink.png" alt="Paws Icon" className="paws-icon-nav" />
          </>
        )}
      </Link>
    </div>
  );
};

export default NavigationBarBottom;

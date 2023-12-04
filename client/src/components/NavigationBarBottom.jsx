import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../views/stylesheets/NavigationBarBottom.scss';
import useSessionValidation from '../hooks/useSessionValidation';

function NavigationBarBottom(props) {
  const { isValid, userId, isLoading } = useSessionValidation();
  const [isLoggedIn, setLogIn] = useState(isValid);

  useEffect(() => {
    console.log(isValid, 'isValid')
    isValid ? setLogIn(true) : setLogIn(false) 
    }
  ,[isLoading, isValid]);

  return (
    <div className="bottom-navigation-bar">
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link>
      <Link to="/about" className="nav-link">
        About Us
      </Link>
      <Link to={isLoggedIn ?"/newsfeeduser" : "/signup" } className="nav-link">
        {isLoggedIn ? 'Your Feed' : 'Sign Up'}
      </Link>
    </div>
  );
}

export default NavigationBarBottom;

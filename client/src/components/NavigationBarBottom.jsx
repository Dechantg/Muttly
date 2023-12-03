import React from 'react';
import { Link } from 'react-router-dom';
import '../views/stylesheets/NavigationBarBottom.scss';
import useSessionValidation from '../hooks/useSessionValidation';


function NavigationBarBottom(props) {

  return (
    <div className="bottom-navigation-bar">
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link> 
      <Link to="/about" className="nav-link">
        About Us
      </Link>
      <Link to="/signup" className="nav-link">
        {props.isLoggedIn ? 'Your Feed': 'Sign Up'}
      </Link>
    </div>
  );
}; 

export default NavigationBarBottom

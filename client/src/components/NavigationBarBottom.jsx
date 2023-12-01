import React from 'react';
import { Link } from 'react-router-dom';
import '../views/stylesheets/NavigationBarBottom.scss';

function NavigationBarBottom() {
  return (
    <div className="bottom-navigation-bar">
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link> 
      <Link to="/about" className="nav-link">
        About Us
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
    </div>
  );
}; 

export default NavigationBarBottom

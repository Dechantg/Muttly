// ContactUsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import EnlargedPawprintImage from './EnlargedPawprintImage';

import '../views/stylesheets/ContactUsPage.scss';

const ContactUsPage = () => {
  return (
    <>
      <div className="contact-us-container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-text">
            <h1>Contact Us</h1>
            <h3>Feel free to BARK at us any time...</h3>
          </div>
          <div className="github-section">
            <Link to="https://github.com/BSMuse/Muttly.git" target="_blank" rel="noopener noreferrer">
              <img src="/public/icons/github.png" alt="GitHub Icon" className="github-icon" />
            </Link>
              <p>Our Code</p>
          </div>
        </div>
        <div className="enlarged-pawprint-image">
          <EnlargedPawprintImage />
        </div>
      </div>
    </>
  );
}; 

export default ContactUsPage;

 {/* Paw Graphic + Social Media Links Section */}
      {/* <div className="social-media-section"> */}
        {/* Large Pawprint Icon */}
        {/* <div className="large-pawprint"> */}
          {/* TikTok Icon */}
          {/* <img src="/path/to/tiktok-icon.png" alt="TikTok Icon" className="tiktok-icon" /> */}
          {/* Instagram Icon */}
          {/* <img src="/path/to/instagram-icon.png" alt="Instagram Icon" className="instagram-icon" /> */}
          {/* Email Icon */}
          {/* <img src="/path/to/email-icon.png" alt="Email Icon" className="email-icon" /> */}
          {/* Facebook Icon */}
          {/* <img src="/path/to/facebook-icon.png" alt="Facebook Icon" className="facebook-icon" />
        </div> */}

        {/* Mailing Address Icon */}
        {/* <div className="address-icon" /> */}
          {/* <img src="/path/to/address-icon.png" alt="Address Icon" className="address-icon" /> */}
          {/* <h2>Muttly Canine Creations</h2> */}
          {/* <p>456 Bark Avenue</p> */}
          {/* <p>Vancouver, BC, Canada</p> */}
          {/* <p>V6Z 3G1</p> */}
        {/* </div> */}

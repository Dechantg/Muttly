// EnlargedPawPrintImage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import '../views/stylesheets/EnlargedPawPrintImage.scss';

const EnlargedPawprintImage = () => {
  return (
    <div className="enlarged-pawprint-container">
      <img src="/public/icons/paws_grey.png" alt="Enlarged Pawprint Image" className="enlarged-pawprint-image" />
        <div>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="tiktok-link" >
            <img src="/public/icons/tiktok.png" alt="TikTok Icon" className="tiktok-icon" />
          </a>
        </div>
        <div>
          {/* Social medial icon INSTAGRAM */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram-link" >
            <img src="/public/icons/instagram.png" alt="Instagram Icon" className="instagram-icon" />
          </a>
        </div>
        <div>
          {/* Social medial icon EMAIL */}
          <a href="mailto:muttly@muttly.com">
            <img src="/public/icons/email.png" alt="Email Icon" className="email-icon" /> 
          </a>
        </div>
        <div>
          {/* Social medial icon FACEBOOK */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook-link" >
            <img src="/public/icons/facebook.png" alt="Facebook Icon" className="facebook-icon" /> 
          </a>
        </div>
        <div>
          {/* Social medial icon ADDRESS */}
          <a href="https://www.google.com/maps/@49.257706,-123.2272613,12z?entry=ttu" target="_blank" rel="noopener noreferre" className="mailing-address-link" >
            <img src="/public/icons/gps.png" alt="Mailing Address Icon" className="mailing-address-icon" /> 
          </a>
        </div>
        <div className="mailing-address">
          <h3>Muttly Canine Creations</h3>
          <p>456 Bark Avenue</p>
          <p>Vancouver, BC, Canada</p>
          <h5>V6Z 8G1</h5>
        </div>
    </div>
  );
};

export default EnlargedPawprintImage;
// EnlargedPawPrintImage.jsx

import React from 'react';

import '../views/stylesheets/EnlargedPawPrintImage.scss';

const EnlargedPawPrintImage = () => {
  return (
    <div className="enlarged-pawprint-container">
      <img src="/public/icons/paws_grey.png" alt="Enlarged Pawprint Image" className="enlarged-pawprint-image" />
      <div className="small-icons">
        <div>
          <img src="/public/icons/tiktok.png" alt="TikTok Icon" className="tiktok-icon" />
        </div>
        <div>
          <img src="/public/icons/instagram.png" alt="Instagram Icon" className="instagram-icon" />
          {/* Social medial icon INSTAGRAM */}
        </div>
        <div>
          <img src="/public/icons/email.png" alt="Email Icon" className="email-icon" /> 
          {/* Social medial icon EMAIL */}
        </div>
        <div>
          <img src="/public/icons/facebook.png" alt="Facebook Icon" className="facebook-icon" /> 
          {/* Social medial icon FACEBOOK */}
        </div>
        <div>
          <img src="/public/icons/gps.png" alt="Mailing Address Icon" className="mailing-address-icon" /> 
          {/* Social medial icon ADDRESS */}
        </div>
        <div className="mailing-address">
          <h3>Muttly Canine Creations</h3>
          <p>456 Bark Avenue</p>
          <p>Vancouver, BC, Canada</p>
          <h5>V6Z 8G1</h5>
        </div>
      </div>
    </div>
  );
};

export default EnlargedPawPrintImage;
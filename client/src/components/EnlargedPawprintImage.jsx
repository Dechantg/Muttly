// EnlargedPawPrintImage.jsx

import React from 'react';

import '../views/stylesheets/EnlargedPawPrintImage.scss';

const EnlargedPawPrintImage = () => {
  return (
    <div className="enlarged-pawprint-container">
      <img src="/path/to/enlargedPawprintImage.png" alt="Enlarged Pawprint Image" className="enlarged-pawprint-image" />
      <div className="small-icons">
        <div className="small-icon" style={{top: '50px', left: '100px' }}>
          {/* Social media icon TIKTOK */}
        </div>
        <div className="small-icon" style={{ top: '120px', left: '200px' }}>
          {/* Social medial icon INSTAGRAM */}
        </div>
        <div className="small-icon" style={{ top: '180px', left: '250px' }}>
          {/* Social medial icon EMAIL */}
        </div>
        <div className="small-icon" style={{ top: '220px', left: '300px' }}>
          {/* Social medial icon FACEBOOK */}
        </div>
        <div className="small-icon" style={{ top: '260px', left: '350px' }}>
          {/* Social medial icon ADDRESS */}
          <p>Mailing Address Here</p>
        </div>
      </div>
    </div>
  );
};

export default EnlargedPawPrintImage;
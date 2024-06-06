import React from 'react';

import EnlargedPawprintImage from './EnlargedPawprintImage';

import '../views/stylesheets/ContactUsPage.scss';

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      {/* LinkedIn Links */}
      <div className='linkedin-container'>
        <div className='coder-container'>
          <a href='https://www.linkedin.com/in/alexander-dacosta/' target='_blank' rel='noreferrer'>
            <img className='linkedin-icon' src='../icons/linkedin.png' alt='LinkedIn Icon' />
          </a>
          <p>Alexander Da Costa</p>
        </div>
        <div className='coder-container'>
          <a href='https://www.linkedin.com/in/gregory-dechant/' target='_blank' rel='noreferrer'>
            <img className='linkedin-icon' src='../icons/linkedin.png' alt='LinkedIn Icon' />
          </a>
          <p>Gregory Dechant</p>
        </div>
        <div className='coder-container'>
          <a href='https://www.linkedin.com/in/cknowles90/' target='_blank' rel='noreferrer'>
            <img className='linkedin-icon' src='../icons/linkedin.png' alt='LinkedIn Icon' />
          </a>
          <p>Charles Denahy-Knowles</p>
        </div>
      </div>

      {/* Contact Header Section */}
      <div className="contact-header-section">
        <h1>Contact Us</h1>
        <h3>Feel free to BARK at us any time...</h3>
        <div className="enlarged-pawprint-image">
          <EnlargedPawprintImage />
        </div>
      </div>

      {/* GitHub Link */}
      <div className="github-section">
        <a href='https://github.com/BSMuse/Muttly.git' target="_blank" rel='noreferrer'>
          <img className="github-icon" src="/icons/github.png" alt="GitHub Icon" />
        </a>
        <p>Our Code</p>
      </div>
    </div>

  );
};

export default ContactUsPage;


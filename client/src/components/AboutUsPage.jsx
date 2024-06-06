import React from 'react';
import '../views/stylesheets/AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      {/* Body of the About Us Page */}
      <div className="about-us-body">
        <div className="background-with-pawprints-left">
          <div className='column-1'>
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
          </div>
          <div className='column-2'>
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
          </div>
        </div>
        <div className="about-us-content">
          <h1>About Us...</h1>
          <h3>Our Tail Begins Here...</h3>
          <p>...At Muttly, we&apos;re the Picasso of Paws, the Da Vinci of Doggos! We&apos;re not just a dog company; we&apos;re barkitects of the highest pedigree...</p>
          <p>Ever wondered what a Dalmatian and a Husky would look like combined?</p>
          <p>We did too!</p>
          <p>Our AI wizards work tirelessly, merging breeds with the precision of a doggy jigsaw puzzle.</p>
          <p>From Beagle-Bernese to Shih Tzu-Shepherd, we&apos;re the matchmakers for mutts.</p>
          <p>Unleash your imagination, create your own breed, and join us in the symphony of barks - where every mutt has its day!</p>
        </div>
        <div className="background-with-pawprints-right">
          <div className='column-3'>
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
          </div>
          <div className='column-4'>
            <img className='side_logo' src='../icons/paws_pink.png' />
            <br />
            <img className='side_logo' src='../icons/paws_pink.png' />
          </div>
        </div>
      </div>
      <img className='center_logo' src='../icons/paws_pink.png' />
    </div>
  );
};

export default AboutUsPage;
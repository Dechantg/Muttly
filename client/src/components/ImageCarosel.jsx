import React, { useState, useEffect } from 'react';
import '../views/stylesheets/imageContainer.scss';
import PropTypes from 'prop-types';

const ImageContainer = ({ images }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => (prevCounter === images.length - 1 ? 0 : prevCounter + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) {
    setCounter(0);
    return null;
  }



  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={`mock_dogs/${image}`}
            alt={`Image ${index + 1}`}
            className={index === counter ? 'active' : 'slide-out'}
          />
        ))}
      </div>
    </div>
  );
};

ImageContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageContainer;

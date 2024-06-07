// FeedRows.jsx
import React from 'react';
import PropTypes from 'prop-types';

import '../views/stylesheets/NewsFeedUserPage.scss';
import PlaceholderImage from './PlaceHolderImage';

const FeedRows = ({ feedImages, placeholderCount, openModal }) => {
  return (
    <div className="images-row">
      {feedImages.slice(0, 5).map((image) => (
        <img
          key={image.id}
          src={image.generated_photo_link}
          alt={`Image ${image.id}`}
          onClick={(event) => openModal(event, image)}
        />
      ))}
      <PlaceholderImage count={placeholderCount} />
    </div>
  );
};

FeedRows.propTypes = {
  feedImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      generated_photo_link: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholderCount: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default FeedRows;

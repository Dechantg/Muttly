import React from "react";
import PropTypes from 'prop-types';

import '../views/stylesheets/PlaceHolderImage.scss';

const PlaceholderImage = ({ count }) => {
  const placeholders = [];

  for (let i = 0; i < count; i++) {
    placeholders.push(
      <div key={i} className="placeholder-container">
        <img src="../icons/dog-placeholder.png" alt="Placeholder" />
      </div>
    );
  }

  return <>{placeholders}</>;
};

PlaceholderImage.propTypes = {
  count: PropTypes.number,
};

export default PlaceholderImage;

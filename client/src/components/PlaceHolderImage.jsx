import React from "react";

import '../views/stylesheets/PlaceHolderImage.scss';

 const PlaceholderImage = ({count}) => { 

  const placeholders = [];

  for (let i = 0; i < count; i++) {
    placeholders.push(
      <div className="placeholder-container">
      <img key={i} src="../icons/dog-placeholder.png"/>
    </div>
    );
  }

  return (<>{placeholders}</>)
}

export default PlaceholderImage
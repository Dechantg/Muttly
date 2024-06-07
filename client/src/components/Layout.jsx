import React from 'react';
import PropTypes from 'prop-types';
import NavigationBarTop from './NavigationBarTop';
import NavigationBarBottom from './NavigationBarBottom';
import '../App.scss';


const Layout = ({ children }) => {

  return (
    <div className='page-container'>
      <NavigationBarTop />
      {children}
      <NavigationBarBottom />

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
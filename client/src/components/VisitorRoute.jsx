import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const VisitorRoute = ({ children }) => {
  const { isValid, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return !isValid ? children : <Navigate to="/newsfeeduser" />;
};

VisitorRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default VisitorRoute;

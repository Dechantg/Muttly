import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const VisitorRoute = ( { children }) => {
  const { isValid, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return !isValid ? children : <Navigate to="/newsfeeduser" />;
};

export default VisitorRoute;

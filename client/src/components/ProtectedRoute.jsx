import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ( { children }) => {
  const { isValid, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return isValid ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

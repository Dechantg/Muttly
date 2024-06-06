import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({
    userId: null,
    isValid: false,
    isLoading: true,
  });

  useEffect(() => {
    const validateSession = async() => {
      try {
        const response = await fetch(`${ import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_APP_API_BASE_URL : 'api' }/validate`, {
          credentials: 'include',
        });
        const data = await response.json();

        setSessionData({
          isValid: response.ok,
          userId: data.userId,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error during session validation:', error);
        setSessionData({
          isValid: false,
          userId: null,
          isLoading: false,
        });
      }
    };
    validateSession();
  }, []);

  return (
    <AuthContext.Provider value={sessionData}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
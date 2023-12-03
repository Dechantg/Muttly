

import { useEffect, useState } from 'react';

const useSessionValidation = () => {
  const [sessionData, setSessionData] = useState({
    userId: null,
    isValid: false,
  });

  useEffect(() => {
    const validateSession = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/validate', {
          credentials: 'include',
        });
        const data = await response.json();

        console.log('Session validation response:', data);

        setSessionData({
          isValid: response.ok,
          userId: data.userId,
        });
      } catch (error) {
        console.error('Error during session validation:', error);

        setSessionData({
          isValid: false,
          userId: null,
        });
      }
    };
    validateSession();
  }, []);

  return sessionData;

};

export default useSessionValidation;


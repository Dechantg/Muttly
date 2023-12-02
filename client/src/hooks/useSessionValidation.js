

import { useEffect } from 'react';

const useSessionValidation = () => {
  useEffect(() => {
    const validateSession = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/validate', {
          credentials: 'include',
        });
        const data = await response.json();

        console.log('Session validation response:', data);
      } catch (error) {
        console.error('Error during session validation:', error);
      }
    };

    validateSession();
  }, []);
};

export default useSessionValidation;


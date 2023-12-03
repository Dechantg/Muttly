import { useEffect, useState } from 'react';





const useSessionValidation = () => {
  const [sessionData, setSessionData] = useState({
    userId: null,
    isValid: false,
    isLoading: true, // Add loading state
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
          isLoading: false, // Set loading to false after completion
        });
      } catch (error) {
        console.error('Error during session validation:', error);

        setSessionData({
          isValid: false,
          userId: null,
          isLoading: false, // Set loading to false even on error
        });
      }
    };
    validateSession();
  }, []);

  return sessionData;
};

export default useSessionValidation;
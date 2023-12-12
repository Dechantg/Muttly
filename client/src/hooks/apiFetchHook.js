

import { useState, useEffect } from 'react';

const useApiFetch = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${path}`, {
          credentials: 'include',
        }); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [path]);

  return { data, error };
};

export default useApiFetch;

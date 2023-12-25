import React, {createContext, useContext, useState, useEffect} from "react";

const FetchContext = createContext(null); 

export const useFetch = () => useContext(FetchContext) 

export const FetchProvider = ({children}) => {

  const [fetchUrl, changeUrl] = useState('api')
  
  useEffect(() => {
    process.
  },[])

  return (
    <FetchContext.Provider value = {fetchUrl}>
      {children}
    </FetchContext.Provider>
  );

}
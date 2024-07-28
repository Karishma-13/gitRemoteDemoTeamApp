import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <AuthContext.Provider value={{isSignedUp, setIsSignedUp}}>
      {children}
    </AuthContext.Provider>
  );
};

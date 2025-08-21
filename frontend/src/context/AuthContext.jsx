import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  
  return (
    <AuthContext.Provider
      value={{isAuth,setisAuth}}
    >
      {children}
    </AuthContext.Provider>
  );
};

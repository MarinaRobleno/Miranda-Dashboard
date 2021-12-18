import React, { useReducer, createContext } from "react";
import  AuthReducer, { initialAuthState } from "./AuthReducer";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={[ authState, authDispatch ]}>
      {children}
    </AuthContext.Provider>
  );
};

import React,{ useReducer } from "react";
import { useContext, createContext } from "react";

export const AuthContext = createContext({
  authenticated: false,
  name: null,
  mail: null,
});

export const AuthReducer = (state: string[], action: object) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        authenticated: true,
        name: action.value,
        mail: action.value,
      };

    case "logout":
      return {
        ...state,
        authenticated: false,
        name: null,
        mail: null,
      };
    case "editName":
      return {
        ...state,
        name: action.value,
      };
    case "editMail":
      return {
        ...state,
        mail: action.value,
      };
    default:
      return state;
  }
};

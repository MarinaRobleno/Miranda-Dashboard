import React,{ useReducer } from "react";
import { createContext } from "react";
import { AuthReducer } from './AuthReducer'

const initialAuthState = {
  isAuthenticated: false,
  user: {
    userName: '',
    email: '',
  },
}

const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('auth')
    if (serializedState === null) {
      return initialAuthState
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const AuthContext = createContext(loadAuthState)

export const AuthProvider = ({ children }) => {

  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState)

  function login(user) {
    authDispatch({
      type: 'LOGIN',
      payload: user,
    })
  }

  function logout() {
    authDispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider value={{ authState, authDispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
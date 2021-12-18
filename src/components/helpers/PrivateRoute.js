import React from 'react'
import { Navigate } from 'react-router'
import { useContext, createContext } from 'react';
import { AuthContext } from './Context';

export const PrivateRoute = ({ children }) => {
    const [authState, authDispatch] = useContext(AuthContext);
    const {isAuthenticated, user} = authState;
    return isAuthenticated ? children : <Navigate to="/login" />
}

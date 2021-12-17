import React from 'react'
import { Navigate } from 'react-router'
import { useContext, createContext } from 'react';
import { AuthContext } from './Context';

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = useContext(AuthContext)
    return isAuthenticated ? children : <Navigate to="/login" />
}

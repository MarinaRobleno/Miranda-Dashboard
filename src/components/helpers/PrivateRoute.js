import React from 'react'
import { Navigate } from 'react-router'
import { useContext, createContext } from 'react';
import { AuthContext } from './Context';

export function PrivateRoute({ children }){
    const auth = useContext(AuthContext);
    return auth.loggedIn ? children : <Navigate to="/login" />
}

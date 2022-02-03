import React from 'react'
import { Navigate } from 'react-router'
import { useContext, createContext } from 'react';
import { AuthContext } from './Context';

export function PrivateRoute({ children }){
    const authenticated = localStorage.getItem('authenticated');
    return authenticated ? children : <Navigate to="/login" />
}

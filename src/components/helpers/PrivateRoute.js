import React from 'react'
import { Navigate } from 'react-router'

export function PrivateRoute({ children }){
    const authenticated = localStorage.getItem('authenticated');
    return authenticated ? children : <Navigate to="/login" />
}

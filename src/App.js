import './App.css';
import './styles/themes.css'
import React, { useState, useEffect, useContext, createContext } from 'react';
import {  Route, Link, Routes } from 'react-router-dom';
import { Login } from './components/pages/Login.jsx'
import { Dashboard } from './components/pages/Dashboard.jsx';
import { Room } from './components/pages/Room.jsx';
import { Bookings } from './components/pages/Bookings.jsx';
import { Contact } from './components/pages/Contact.jsx';
import { Concierge } from './components/pages/Concierge.jsx';
import { PrivateRoute } from './components/helpers/PrivateRoute.js';
import { AuthContext } from './components/helpers/Context';
import { SideBar } from './components/SideBar';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    
      <header>
        <div className='header'>
          <h3 className='app-title'>MIRANDA DASHBOARD</h3>
        </div>
      </header>
      {loggedIn ? <SideBar className='side-bar' /> : null}
      
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        <Routes>
          <Route path='/login' element={<Login />}/>        
          <Route 
            path='/' 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>}/>
          <Route path='/room/:id/edit' element={
            <PrivateRoute>
              <Room />
            </PrivateRoute>}/>
          <Route path='/room/:id' element={
              <PrivateRoute>
                <Room />
              </PrivateRoute>}/>       
          <Route path='/room' element={
              <PrivateRoute>
                <Room />
              </PrivateRoute>}/>        
          <Route path='/bookings' element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>}/>
          <Route path='/contact' element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>}/>
          <Route path='/concierge' element={
              <PrivateRoute>
                <Concierge />
              </PrivateRoute>}/>      
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;

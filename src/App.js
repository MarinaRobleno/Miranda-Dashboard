import './styles/App.scss'
import { MenuButtons } from './styles/Themes';
import React, { useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Login } from './components/pages/Login.jsx'
import { Dashboard } from './components/pages/Dashboard.jsx';
import { Room } from './components/pages/Room.jsx';
import { Bookings } from './components/pages/Bookings.jsx';
import { Contact } from './components/pages/Contact.jsx';
import { Concierge } from './components/pages/Users.jsx';
import { PrivateRoute } from './components/helpers/PrivateRoute.js';
import { AuthContext } from './components/helpers/Context';
import { SideBar } from './components/SideBar';

const SAVE_STATE = '1';
const SAVE_KEY = 'auth';

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem(SAVE_KEY) === SAVE_STATE);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem(SAVE_KEY, SAVE_STATE);
    }else{
      localStorage.removeItem(SAVE_KEY);
    }
  }, [loggedIn])

  return (
    <>
      <header>
        <div className='header'>
          <h3 className='app-title'>MIRANDA DASHBOARD</h3>
          {loggedIn ? 
            <MenuButtons className='log-out' onClick={() => setLoggedIn(false)}>Log Out</MenuButtons> : null}
        </div>
      </header>
      <div className='whole-content'>
        <div className='side-bar'>
          {loggedIn ? <SideBar /> : null}
        </div>
        <div className='content'>
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
              <Route path='/bookings/:id/edit' element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>}/>
              <Route path='/bookings/:id' element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>}/>        
              <Route path='/bookings' element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>}/>
              <Route path='/contact/:id/edit' element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>}/>
              <Route path='/contact/:id' element={
                  <PrivateRoute>
                    <Contact />
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
        </div>
      </div>
    </>
  );
}

export default App;

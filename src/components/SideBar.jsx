import '../styles/App.scss'
import { React, useContext } from 'react';
import { AuthContext } from './helpers/Context';
import {  Route, Link, Routes } from 'react-router-dom';

export function SideBar() {
    const auth = useContext(AuthContext)
    return (
        <div className='menu-line-button'>
           <Link to='/'>
              <button className='menu-button'>Dashboard</button>
            </Link>
            <Link to='/room'>
                <button className='menu-button'>Room</button>
            </Link>
            <Link to='/bookings'>
                <button className='menu-button'>Bookings</button>
            </Link>
            <Link to='/contact'>
                <button className='menu-button'>Contact</button>
            </Link>
            <Link to='/concierge'>
                <button className='menu-button'>Concierge</button>
            </Link>            
        </div>
    )
}

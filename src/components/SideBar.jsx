import '../styles/App.scss'
import { MenuButtons } from '../styles/Themes';
import { React, useContext } from 'react';
import { AuthContext } from './helpers/Context';
import {  Route, Link, Routes } from 'react-router-dom';

export function SideBar() {
    const auth = useContext(AuthContext)
    return (
        <div className='menu-line-button'>
           <Link to='/'>
              <MenuButtons className='menu-button'>Dashboard</MenuButtons>
            </Link>
            <Link to='/room'>
                <MenuButtons className='menu-button'>Room</MenuButtons>
            </Link>
            <Link to='/bookings'>
                <MenuButtons className='menu-button'>Bookings</MenuButtons>
            </Link>
            <Link to='/contact'>
                <MenuButtons className='menu-button'>Contact</MenuButtons>
            </Link>
            <Link to='/concierge'>
                <MenuButtons className='menu-button'>Users</MenuButtons>
            </Link>            
        </div>
    )
}

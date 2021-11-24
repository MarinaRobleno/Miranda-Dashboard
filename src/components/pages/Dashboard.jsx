import '../../styles/App.scss'
import React from 'react'
import { useContext, createContext } from 'react';
import { AuthContext } from '../helpers/Context'
import { SmallPanel } from '../../styles/Themes';

export function Dashboard() {
    return (
        <div id='dashboard'>
            <div className='panels'>
                <SmallPanel>
                    A
                </SmallPanel>
                <SmallPanel>
                    A
                </SmallPanel>
                <SmallPanel>
                    A
                </SmallPanel>
                <SmallPanel>
                    A
                </SmallPanel>
            </div>
            
        </div>
    )
}

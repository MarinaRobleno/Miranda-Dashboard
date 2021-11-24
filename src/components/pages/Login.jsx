import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../helpers/Context';
import { useLocation, useNavigate } from 'react-router-dom';

export function Login() {
    const userKey = 'marina';
    const passKey = 'pass';
    const {loggedIn, setLoggedIn} = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    const handleUser = (e) =>{
        e.preventDefault();
        const newUser = e.target.value;
        setUser(newUser);
    }

    const handlePassword = (e) =>{
        e.preventDefault();
        const newPassword = e.target.value;
        setPassword(newPassword);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (userKey === user && passKey === password){
            setLoggedIn(true);
        }
        else{
            alert('Nope')
        }
    }
    useEffect(() => {
        if (loggedIn){
            navigate('/', {replace: true})
        }
    }, [loggedIn])

    return (
        <div id='login'>
            <form className='login-form' onSubmit={handleLoginSubmit}>
                <label className='input-label'>User</label>
                <input type='text' className='name-input' onChange={handleUser}/>
                <label className='input-label'>Password</label>
                <input type='password' className='name-input' onChange={handlePassword}/>
                <input type='submit' value='Login'/>
            </form>
            
        </div>
    )
}

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../helpers/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 350px;
    font-size: 30px;
    background-color: ${(props) => props.theme.colors.main_white};
    border: 3px solid ${(props) => props.theme.colors.green_dark};
    border-radius: 18px;
    box-shadow: 0px 16px 30px #00000014;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    font-size: 20px;
    font-weight: 600;
`

const LoginInput = styled.input`
    height: 50px;
    font: normal normal 400 18px/46px Poppins;
    padding: 0 15px;
    margin: 10px 0 20px;
    border: none;
    border-radius: 18px;
    color: ${(props) => props.theme.colors.main_white};
    background-color: ${(props) => props.theme.colors.green_light};
    &:focus {
        outline: none;
    }    
`

const LoginSubmit = styled.input`
    width: 150px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    font: normal normal 500 20px/46px Poppins;
    cursor: pointer;
    color: ${(props) => props.theme.colors.main_white};
    border: 3px solid ${(props) => props.theme.colors.green_dark};
    background-color: ${(props) => props.theme.colors.green_dark};
    border-radius: 8px;
`

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
            alert('Wrong password or username')
        }
    }
    useEffect(() => {
        if (loggedIn){
            navigate('/', {replace: true})
        }
    }, [loggedIn])

    return (
        <LoginContainer>
            <div>Log In</div>
            <LoginForm onSubmit={handleLoginSubmit}>
                <label className='input-label'>User</label>
                <LoginInput type='text' className='user-input' onChange={handleUser}/>
                <label className='input-label'>Password</label>
                <LoginInput type='password' className='password-input' onChange={handlePassword}/>
                <LoginSubmit type='submit' value='Continue' />
            </LoginForm>
            
        </LoginContainer>
    )
}

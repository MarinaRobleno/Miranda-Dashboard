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
    const nameKey = 'admin';
    const mailKey = 'admin';
    const {loggedIn, setLoggedIn} = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');


    const handleName = (e) =>{
        e.preventDefault();
        const newName = e.target.value;
        setName(newName);
    }

    const handleMail = (e) =>{
        e.preventDefault();
        const newMail = e.target.value;
        setMail(newMail);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (nameKey === name && mailKey === mail){
            setLoggedIn(true);
        }
        else{
            alert('Wrong mail or username')
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
                <label className='input-label'>Name</label>
                <LoginInput type='text' className='name-input' onChange={handleName}/>
                <label className='input-label'>Mail</label>
                <LoginInput type='text' className='mail-input' onChange={handleMail}/>
                <LoginSubmit type='submit' value='Continue' />
            </LoginForm>
            
        </LoginContainer>
    )
}

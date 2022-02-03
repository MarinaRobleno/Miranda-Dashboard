import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/Context";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledDivColumn, StyledDivRow } from "../BookDetail";
import { StyledLogoHotel, StyledLogoPack } from "../SideBar";
import { GiStarsStack } from "react-icons/gi";
import { authenticationHanlder } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 350px;
  font-size: 30px;
  background-color: ${(props) => props.theme.colors.main_white};
  border: 3px solid ${(props) => props.theme.colors.green_dark};
  border-radius: 10px;
  box-shadow: 0px 16px 30px #00000014;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 20px;
  font-weight: 600;
`;

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
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.border_grey_light};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.border_grey_light};
  }
`;

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
`;

export function Login() {
  const nameKey = "admin";
  const passKey = "admin";
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    setName(newName);
  };

  const handlePass = (e) => {
    e.preventDefault();
    const newPass = e.target.value;
    setPassword(newPass);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
      
      try{
        const response = await fetch('http://localhost:3000/login/login', {
          method: 'POST',
					headers : { 'Content-Type' : 'application/json' },
          body: JSON.stringify({email: name, password: password} )
        })
        if (response.ok){
				
					const json =  await response.json();
					dispatch(authenticationHanlder({status: true, token: json.token}));
					navigate("/", { replace: true });
				} else{
					console.log('Network response was not ok')
					 //bad combination
				}
				
      }catch (err) {
        console.log('There has been a problem with your fetch operation:', err);
				 //bad combination
      }
  };
  useEffect(() => {
    if (loggedIn) {
      
    }
  }, [loggedIn]);

  return (
    <StyledDivColumn style={{ alignItems: "center" }}>
      <LoginContainer>
        <StyledDivRow style={{ alignItems: "flex-end" }}>
          <StyledLogoPack>
            <GiStarsStack />
            <StyledLogoHotel />
          </StyledLogoPack>
          <div>Log In</div>
        </StyledDivRow>
        <LoginForm onSubmit={handleLoginSubmit}>
          <LoginInput
            type="text"
            className="name-input"
            onChange={handleName}
            placeholder="User"
          />
          <LoginInput
            type="password"
            className="mail-input"
            onChange={handlePass}
            placeholder="Password"
          />
          <LoginSubmit type="submit" value="Continue" />
        </LoginForm>
      </LoginContainer>
      <StyledDivRow style={{ fontSize: "12px" }}>
        User: admin // Password: admin
      </StyledDivRow>
    </StyledDivColumn>
  );
}

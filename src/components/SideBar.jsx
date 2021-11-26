import "../styles/App.scss";
import { React, useContext } from "react";
import { AuthContext } from "./helpers/Context";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { BiKey } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { Button } from './Button';

const StyledSideBarContent = styled.div`

`

const MenuButtonLine = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
`;

const MenuButtons = styled.div`
  display: flex;
  height: 67px;
  width: 345px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-left: 56px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.green_light};
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 40px auto 85px;
  color: ${(props) => props.theme.colors.icon_black};
  font-weight: 700;
  font-size: 24px;
`;

const ContactUsCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  width: 233px;
  height: 221px;
  margin: 0 56px 62px;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
`

const StyledCopyrightContainer = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const StyledAdminDashboard = styled.div`
  text-align: left;
  font: normal normal 600 16px/25px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
  margin-left: 56px;
`;


const StyledCopyright = styled.div`
  color: ${(props) => props.theme.colors.green_light};
  font: normal normal 300 14px/21px Poppins;
  margin-left: 56px;
`;

export function SideBar() {
  const auth = useContext(AuthContext);

  let location = useLocation();
  let path = location.pathname;

  return (
    <StyledSideBarContent>
      <LogoContainer>travl</LogoContainer>
      <MenuButtonLine>
        <StyledLink to="/">
          {path == "/" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: '600'
              }}
            >
              <RiDashboardLine style={{marginRight: '27px'}} />
              <div>Dashboard</div>
            </MenuButtons>
          ) : (
            <MenuButtons >
              <RiDashboardLine style={{marginRight: '27px'}}/>
              <div>Dashboard</div>
            </MenuButtons>
          )}
        </StyledLink>
        <StyledLink to="/room">
          {path == "/room" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: '600'
              }}
            >
              <BiKey style={{marginRight: '27px'}} />
              <div>Room</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BiKey style={{marginRight: '27px'}} />
              <div>Room</div>
            </MenuButtons>
          )}
        </StyledLink>
        <StyledLink to="/bookings">
          {path == "/bookings" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: '600'
              }}
            >
              <BsCalendarCheck style={{marginRight: '27px'}} />
              <div>Bookings</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BsCalendarCheck style={{marginRight: '27px'}} />
              <div>Bookings</div>
            </MenuButtons>
          )}
        </StyledLink>
        <StyledLink to="/contact">
          {path == "/contact" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: '600'
              }}
            >
              <IoMdContacts style={{marginRight: '27px'}} />
              <div>Contact</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <IoMdContacts style={{marginRight: '27px'}} />
              <div>Contact</div>
            </MenuButtons>
          )}
        </StyledLink>
        <StyledLink to="/users">
          {path == "/users" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: '600'
              }}
            >
              <FiUser style={{marginRight: '27px'}} />
              <div>Users</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <FiUser style={{marginRight: '27px'}} />
              <div>Users</div>
            </MenuButtons>
          )}
        </StyledLink>
        <ContactUsCard>
            <div style={{background: '#C5C5C5 0% 0% no-repeat padding-box', borderRadius: '8px', width: '70px', height: '70px', color: '#C5C5C5', marginBottom: '15px;'}}></div>
            <div style={{color: '#393939', font: 'normal normal medium 16px/25px Poppins', marginBottom: '9px'}}>Marina Robleño</div>
            <div style={{color: '#B2B2B2', font: 'normal normal 300 12px/18px Poppins', marginBottom: '16px'}}>marinarobleno@mail.com</div>
            <Button weight='600' background='#EBF1EF' color='#135846' name='Contact Us'></Button>
        </ContactUsCard>
        <StyledCopyrightContainer>
          <StyledAdminDashboard>
            Travl Hotel Admin Dashboard
          </StyledAdminDashboard>
          <StyledCopyrightContainer>
            <StyledCopyright>© 2021 All Rights Reserved</StyledCopyright>
            <StyledCopyright>Made with ♥ by Marina</StyledCopyright>
          </StyledCopyrightContainer>
        </StyledCopyrightContainer>
      </MenuButtonLine>
    </StyledSideBarContent>
  );
}

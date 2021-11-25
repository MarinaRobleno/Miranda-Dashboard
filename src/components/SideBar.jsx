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

const MenuButtonLine = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MenuButtons = styled.div`
  display: flex;
  height: 67px;
  width: 345px;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const StyledAdminDashboard = styled.div`
  text-align: left;
  font: normal normal 600 16px/25px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
`;

const StyledCopyrightContainer = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const StyledCopyright = styled.div`
  color: ${(props) => props.theme.colors.green_light};
  font: normal normal 300 14px/21px Poppins;
`;

export function SideBar() {
  const auth = useContext(AuthContext);

  let location = useLocation();
  let path = location.pathname;

  return (
    <>
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
              <RiDashboardLine />
              <div>Dashboard</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <RiDashboardLine />
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
              <BiKey />
              <div>Room</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BiKey />
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
              <BsCalendarCheck />
              <div>Bookings</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BsCalendarCheck />
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
              <IoMdContacts />
              <div>Contact</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <IoMdContacts />
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
              <FiUser />
              <div>Users</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <FiUser />
              <div>Users</div>
            </MenuButtons>
          )}
        </StyledLink>
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
    </>
  );
}

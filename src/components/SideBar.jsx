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
import Button from "./Button";
import { FaHotel } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";

const StyledSideBarContent = styled.div`
  width: 230px;
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    width: 280px;
  }
`;

const MenuButtonLine = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  width: 230px;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    width: 280px;
  }
`;

const MenuButtons = styled.div`
  display: flex;
  height: 50px;
  width: 230px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-left: 30px;
  background-color: ${(props) => props.theme.colors.main_white};
  border: none;
  font: normal normal 400 14px/27px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.green_light};
  cursor: pointer;
  @media (min-width: 1890px) {
    font-size: 15px;
    padding-left: 40px;
    height: 60px;
    width: 280px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  min-width: 230px;
  align-items: center;
  text-align: center;
  margin: 50px 25px;
  color: ${(props) => props.theme.colors.icon_black};
  background-color: ${(props) => props.theme.colors.main_white};
  font-weight: 800;
  font-size: 20px;
  @media (min-width: 1890px) {
    min-width: 280px;
    margin: 70px 35px;
    font-size: 26px;
  }
`;

export const StyledLogoPack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.red};
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    margin-right: 12px;
    margin-bottom: 6px;
  }
`;

export const StyledLogoHotel = styled(FaHotel)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.green_dark};
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    font-size: 33px;
  }
`;

const ContactUsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 180px;
  margin: 0 auto 15px;
  padding: 14px 0;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  @media (min-width: 1890px) {
    width: 260px;
    height: 240px;
    margin: 0 auto 35px;
  }
`;

const StyledCopyrightContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 1890px) {
    height: 200px;
  }
`;

const StyledAdminDashboard = styled.div`
  text-align: left;
  font: normal normal 600 12px/25px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
  @media (min-width: 1890px) {
    text-align: center;
    font-size: 14px;
    padding: 0 40px 20px;
  }
`;

const StyledCopyright = styled.div`
  color: ${(props) => props.theme.colors.green_light};
  font: normal normal 300 12px/21px Poppins;
  text-align: left;
  @media (min-width: 1890px) {
    font-size: 14px;
  }
`;

export function SideBar() {
  const auth = useContext(AuthContext);

  let location = useLocation();
  let path = location.pathname;

  return (
    <StyledSideBarContent>
      <MenuButtonLine>
        <LogoContainer>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              position: "fixed",
              top: "20px",
              textAlign: "left",
              backgroundColor: "#FFFFFF",
            }}
          >
            <StyledLogoPack>
              <GiStarsStack />
              <StyledLogoHotel />
            </StyledLogoPack>
            <div>
              <div>Miranda</div>
              <div
                style={
                  window.innerWidth < 1920
                    ? {
                        font: "normal normal 300 12px/18px Poppins",
                        color: "#5D5449",
                      }
                    : {
                        font: "normal normal 300 13px/18px Poppins",
                        color: "#5D5449",
                      }
                }
              >
                Hotel Admin Dashboard
              </div>
            </div>
          </div>
        </LogoContainer>
        <StyledLink to="/">
          {path == "/" ? (
            <MenuButtons
              style={{
                color: "#E23428",
                borderRadius: "0 6px 6px 0",
                borderLeft: "solid #E23428",
                fontWeight: "600",
              }}
            >
              <RiDashboardLine
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Dashboard</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <RiDashboardLine
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
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
                fontWeight: "600",
              }}
            >
              <BiKey
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Room</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BiKey
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
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
                fontWeight: "600",
              }}
            >
              <BsCalendarCheck
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Bookings</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BsCalendarCheck
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
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
                fontWeight: "600",
              }}
            >
              <IoMdContacts
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Contact</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <IoMdContacts
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
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
                fontWeight: "600",
              }}
            >
              <FiUser
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Users</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <FiUser
                style={
                  window.innerWidth < 1920
                    ? { marginRight: "27px", fontSize: "20px" }
                    : { marginRight: "27px", fontSize: "25px" }
                }
              />
              <div>Users</div>
            </MenuButtons>
          )}
        </StyledLink>
        <ContactUsCard>
          <div
            style={
              window.innerWidth < 1920
                ? {
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    borderRadius: "8px",
                    width: "30px",
                    height: "30px",
                    color: "#C5C5C5",
                    marginBottom: "15px;",
                  }
                : { width: "50px", height: "50px" }
            }
          >
            <img src="https://avatars.dicebear.com/api/bottts/icon.svg" />
          </div>
          <div
            style={
              window.innerWidth < 1920
                ? {
                    color: "#393939",
                    font: "normal normal 600 14px/25px Poppins",
                    marginBottom: "9px",
                  }
                : { color: "#393939", fontSize: "18px", marginBottom: "9px" }
            }
          >
            Marina Robleño
          </div>
          <div
            style={
              window.innerWidth < 1920
                ? {
                    color: "#B2B2B2",
                    font: "normal normal 300 12px/18px Poppins",
                    marginBottom: "8px",
                  }
                : { color: "#B2B2B2", fontSize: "14px", marginBottom: "8px" }
            }
          >
            marinarobleno@mail.com
          </div>
          <div
            style={
              window.innerWidth < 1920
                ? {
                    color: "#B2B2B2",
                    font: "normal normal 300 12px/18px Poppins",
                    marginBottom: "8px",
                  }
                : { color: "#B2B2B2", fontSize: "14px", marginBottom: "8px" }
            }
          >
            github.com/MarinaRobleno
          </div>
          <Button
            contact
            weight="600"
            style={
              window.innerWidth < 1920
                ? { width: "50px", height: "30px", fontSize: "12px" }
                : { width: "80px", height: "40px", fontSize: "14px" }
            }
          >
            Edit
          </Button>
        </ContactUsCard>
        <StyledCopyrightContainer>
          <StyledAdminDashboard>
            Miranda Hotel Admin Dashboard
          </StyledAdminDashboard>
          <StyledCopyrightContainer>
            <StyledCopyright>© 2021 All Rights Reserved</StyledCopyright>
          </StyledCopyrightContainer>
        </StyledCopyrightContainer>
      </MenuButtonLine>
    </StyledSideBarContent>
  );
}

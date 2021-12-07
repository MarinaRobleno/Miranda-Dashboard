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
  width: 345px;
  background-color: ${(props) => props.theme.colors.main_white};
`;

const MenuButtonLine = styled.div`
  display: flex;
  position: fixed;
  width: 345px;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  background-color: ${(props) => props.theme.colors.main_white};
`;

const MenuButtons = styled.div`
  display: flex;
  height: 67px;
  width: 343px;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  min-width: 345px;
  align-items: center;
  text-align: center;
  margin: 50px 56px 85px;
  color: ${(props) => props.theme.colors.icon_black};
  background-color: ${(props) => props.theme.colors.main_white};
  font-weight: 800;
  font-size: 30px;
`;

const StyledLogoPack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.red};
  background-color: ${(props) => props.theme.colors.main_white};
`;

const StyledLogoHotel = styled(FaHotel)`
  font-size: 40px;
  color: ${(props) => props.theme.colors.green_dark};
  background-color: ${(props) => props.theme.colors.main_white};
`;

const ContactUsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 221px;
  margin: 0 56px 62px;
  padding: 24px 0;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
`;

const StyledCopyrightContainer = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin: 0 auto;
`;

const StyledAdminDashboard = styled.div`
  text-align: left;
  font: normal normal 600 16px/25px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
`;

const StyledCopyright = styled.div`
  color: ${(props) => props.theme.colors.green_light};
  font: normal normal 300 14px/21px Poppins;
  text-align: left;
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
              textAlign: "left",
              backgroundColor: "#FFFFFF",
            }}
          >
            <StyledLogoPack>
              <GiStarsStack />
              <StyledLogoHotel />
            </StyledLogoPack>
            <div>
              <div>travl</div>
              <div
                style={{
                  font: "normal normal 300 12px/18px Poppins",
                  color: "#5D5449",
                }}
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
                style={{ marginRight: "27px", fontSize: "24px" }}
              />
              <div>Dashboard</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <RiDashboardLine
                style={{ marginRight: "27px", fontSize: "24px" }}
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
              <BiKey style={{ marginRight: "27px", fontSize: "24px" }} />
              <div>Room</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BiKey style={{ marginRight: "27px", fontSize: "24px" }} />
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
                style={{ marginRight: "27px", fontSize: "24px" }}
              />
              <div>Bookings</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <BsCalendarCheck
                style={{ marginRight: "27px", fontSize: "24px" }}
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
              <IoMdContacts style={{ marginRight: "27px", fontSize: "24px" }} />
              <div>Contact</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <IoMdContacts style={{ marginRight: "27px", fontSize: "24px" }} />
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
              <FiUser style={{ marginRight: "27px", fontSize: "24px" }} />
              <div>Users</div>
            </MenuButtons>
          ) : (
            <MenuButtons>
              <FiUser style={{ marginRight: "27px", fontSize: "24px" }} />
              <div>Users</div>
            </MenuButtons>
          )}
        </StyledLink>
        <ContactUsCard>
          <div
            style={{
              background: "#C5C5C5 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              width: "70px",
              height: "70px",
              color: "#C5C5C5",
              marginBottom: "15px;",
            }}
          ></div>
          <div
            style={{
              color: "#393939",
              font: "normal normal medium 16px/25px Poppins",
              marginBottom: "9px",
            }}
          >
            Marina Robleño
          </div>
          <div
            style={{
              color: "#B2B2B2",
              font: "normal normal 300 12px/18px Poppins",
              marginBottom: "16px",
            }}
          >
            marinarobleno@mail.com
          </div>
          <Button contact weight="600">
            Edit
          </Button>
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

import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/pages/Login.jsx";
import { Dashboard } from "./components/pages/Dashboard.jsx";
import { Room } from "./components/pages/Room.jsx";
import { Bookings } from "./components/pages/Bookings.jsx";
import { Contact } from "./components/pages/Contact.jsx";
import { Users } from "./components/pages/Users.jsx";
import { NewRoom } from "./components/NewRoom.jsx";
import { NewUser } from './components/NewUser.jsx';
import { BookDetail } from "./components/BookDetail.jsx";
import { PrivateRoute } from "./components/helpers/PrivateRoute.js";
import { AuthContext } from "./components/helpers/Context";
import styled from "styled-components";
import { SideBar } from "./components/SideBar";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiBell, BiEnvelope } from "react-icons/bi";

const SAVE_STATE = "1";
const SAVE_KEY = "auth";

const WholeContent = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.main_grey};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  min-height: 100%;
  padding: 50px;
  background-color: ${(props) => props.theme.colors.main_grey};
`;

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  z-index: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 120px;
  box-shadow: 0px 3px 10px #00000005;
  background-color: ${(props) => props.theme.colors.main_white};
`;

const SideBarContainer = styled.div`
  min-height: 100%;
  min-width: 345px;
  box-shadow: 13px 3px 40px #00000005;
  background-color: ${(props) => props.theme.colors.main_white};
`;

const StyledHamburger = styled(HiOutlineMenuAlt2)`
  font-size: 26px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
`;

const StyledLogout = styled(FiLogOut)`
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  font: normal normal normal 26px/27px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
  cursor: pointer;
  margin-left: 29px;
`;

const StyledEnvelope = styled(BiEnvelope)`
  font-size: 26px;
  margin: 0 29px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.icon_black};
`;

const StyledBell = styled(BiBell)`
  font-size: 26px;
  margin: 0 29px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.icon_black};
`;

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem(SAVE_KEY) === SAVE_STATE
  );
  const [isSidebar, setIsSidebar] = useState(null);

  const handleCloseSidebar = () => {
    return isSidebar ? setIsSidebar(false) : setIsSidebar(true);
  };

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem(SAVE_KEY, SAVE_STATE);
      setIsSidebar(true);
    } else {
      localStorage.removeItem(SAVE_KEY);
    }
  }, [loggedIn]);

  return (
    <>
      <WholeContent>
        {loggedIn && isSidebar ? (
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
        ) : null}
        <RightContent>
          {loggedIn ? (
            <header>
              <StyledHeader>
                <StyledHamburger onClick={handleCloseSidebar} />
                <div
                  style={
                    isSidebar
                      ? { paddingRight: "345px" }
                      : { paddingRight: "0" }
                  }
                >
                  <StyledEnvelope />
                  <StyledBell />
                  <StyledLogout onClick={() => setLoggedIn(false)} />
                </div>
              </StyledHeader>
            </header>
          ) : null}
          <Content>
            <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="room/new-room"
                  element={
                    <PrivateRoute>
                      <NewRoom />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/room"
                  element={
                    <PrivateRoute>
                      <Room />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="bookings/:id"
                  element={
                    <PrivateRoute>
                      <BookDetail />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/bookings"
                  element={
                    <PrivateRoute>
                      <Bookings />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PrivateRoute>
                      <Contact />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/users/new-user"
                  element={
                    <PrivateRoute>
                      <NewUser />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <PrivateRoute>
                      <Users />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthContext.Provider>
          </Content>
        </RightContent>
      </WholeContent>
    </>
  );
}

export default App;

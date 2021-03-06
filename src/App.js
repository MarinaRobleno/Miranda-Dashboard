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
import { NewUser } from "./components/NewUser.jsx";
import { EditUser } from "./components/EditUser.jsx";
import { BookDetail } from "./components/BookDetail.jsx";
import { PrivateRoute } from "./components/helpers/PrivateRoute.js";
import styled from "styled-components";
import { SideBar } from "./components/SideBar";
import { FiLogOut } from "react-icons/fi";
import { VscArrowSwap } from "react-icons/vsc";
import { BiBell, BiEnvelope } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { selectContact } from "./features/slices/contactSlice";
import { selectBookings } from "./features/slices/bookingsSlice";
import { EditRoom } from "./components/EditRoom";
import { authenticationHandler } from "./features/slices/authSlice";
import { EditLoggedUser } from "./components/EditLoggedUser";

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
  margin-top: 90px;
  min-height: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main_grey};
  @media (min-width: 1890px) {
    margin-top: 100px;
    padding: 50px;
  }
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
  height: 90px;
  box-shadow: 0px 3px 10px #00000005;
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    height: 100px;
  }
`;

const SideBarContainer = styled.div`
  min-height: 100%;
  min-width: 230px;
  box-shadow: 13px 3px 40px #00000005;
  background-color: ${(props) => props.theme.colors.main_white};
  @media (min-width: 1890px) {
    min-width: 280px;
  }
`;

const StyledHamburger = styled(VscArrowSwap)`
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
`;

const StyledLogout = styled(FiLogOut)`
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  font: normal normal normal 20px/27px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.icon_black};
  cursor: pointer;
  margin-left: 29px;
`;

const StyledEnvelope = styled(BiEnvelope)`
  font-size: 20px;
  margin: 0 29px;
  color: ${(props) => props.theme.colors.icon_black};
`;

const StyledNotificationCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  width: 17px;
  height: 17px;
  background: ${(props) => props.theme.colors.red} 0% 0% no-repeat padding-box;
  border: 2px solid #ffffff;
  border-radius: 5px;
  color: white;
  font: normal normal 600 10px/21px Poppins;
  @media (min-width: 1890px) {
    top: 30px;
  }
`;

const StyledBell = styled(BiBell)`
  font-size: 20px;
  margin: 0 29px;
  color: ${(props) => props.theme.colors.icon_black};
`;

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.auth);
  const [isSidebar, setIsSidebar] = useState(true);
  const [actualDate, setActualDate] = useState(new Date());

  const handleCloseSidebar = () => {
    return isSidebar ? setIsSidebar(false) : setIsSidebar(true);
  };

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setIsSidebar(true);
      dispatch(
        authenticationHandler({
          status: true,
          token: localStorage.getItem("token"),
        })
      );
    }
  }, []);

  const myContact = useSelector(selectContact);
  const myBookings = useSelector(selectBookings);

  const currentMonth = new Date().getMonth();
  const orderArray = myBookings.booking.map((book) => {
    return new Date(book.orderDate).getMonth();
  });

  const orderCount = orderArray.filter(
    (order) => order === currentMonth
  ).length;

  return (
    <>
      <WholeContent>
        {authenticated && isSidebar ? (
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
        ) : null}
        <RightContent>
          {authenticated ? (
            <header>
              <StyledHeader>
                <StyledHamburger onClick={handleCloseSidebar} />
                <div
                  style={
                    window.innerWidth < 1890
                      ? isSidebar
                        ? { paddingRight: "230px" }
                        : { paddingRight: "0" }
                      : isSidebar
                      ? { paddingRight: "280px" }
                      : { paddingRight: "0" }
                  }
                >
                  <StyledEnvelope />
                  {myContact.contact.length > 0 ? (
                    <StyledNotificationCounter
                      style={
                        window.innerWidth < 1890
                          ? isSidebar
                            ? { right: "418px" }
                            : { right: "188px" }
                          : isSidebar
                          ? { right: "468px" }
                          : { right: "188px" }
                      }
                    >
                      {myContact.contact.length}
                    </StyledNotificationCounter>
                  ) : null}
                  <StyledBell />
                  <StyledNotificationCounter
                    style={
                      window.innerWidth < 1890
                        ? isSidebar
                          ? { right: "340px" }
                          : { right: "110px" }
                        : isSidebar
                        ? { right: "390px" }
                        : { right: "110px" }
                    }
                  >
                    {orderCount}
                  </StyledNotificationCounter>
                  <StyledLogout
                    onClick={() => {
                      dispatch(authenticationHandler({ status: false }));
                      localStorage.removeItem("mail")
                    }}
                  />
                </div>
              </StyledHeader>
            </header>
          ) : null}
          <Content>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard
                      actualDate={actualDate}
                      setActualDate={setActualDate}
                    />
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
                path="room/:id/edit"
                element={
                  <PrivateRoute>
                    <EditRoom />
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
                    <Bookings actualDate={actualDate} />
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
                path="/users/:id/edit-logged"
                element={
                  <PrivateRoute>
                    <EditLoggedUser />
                  </PrivateRoute>
                }
              />
              <Route
                path="/users/:id/edit"
                element={
                  <PrivateRoute>
                    <EditUser />
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
          </Content>
        </RightContent>
      </WholeContent>
    </>
  );
}

export default App;

import "../../styles/App.scss";
import React, { useState } from "react";
import { selectContact } from "../../features/slices/contactSlice";
import { selectBookings } from "../../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BiBed, BiLogIn, BiLogOut } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { Calendar } from "../Calendar";
import { TiDeleteOutline } from "react-icons/ti";
import { ReviewList } from "../ReviewList";
import ReservationChart from "../Chart";
import { BookingScheduleData } from "../BookingScheduleData";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  grid-gap: 20px;
`;

const StyledKpi = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 200px;
  min-height: 80px;
  background-color: ${(props) => props.theme.colors.main_white};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  @media (max-width: 1890px) {
    min-width: 250px;
  }
`;

const StyledKpiData = styled.div``;

const StyledIconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin: 0 15px 0 20px;
  background-color: ${(props) => props.theme.colors.flesh};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.red};
  font-size: 20px;
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.flesh};
  }
`;

export const StyledBigPanelHeader = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.letter_grey_dark};
`;

export const StyledBigPanel = styled.div`
  height: 280px;
  background-color: ${(props) => props.theme.colors.main_white};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 30px;
`;

export const StyledReviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  min-width: 300px;
  height: 200px;
  margin: 10px auto;
  padding: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid ${(props) => props.theme.colors.border_grey_light};
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 16px 30px #00000014;
  }
  @media (max-width: 1890px) {
    min-width: 200px;
  }
`;

export const StyledDeleteReview = styled(TiDeleteOutline)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export function Dashboard() {
  const [checkInCounter, setCheckInCounter] = useState(0);
  const [checkOutCounter, setCheckOutCounter] = useState(0);
  const [actualDate, setActualDate] = useState(new Date());

  const changeCheckInCount = (count) => {
    setCheckInCounter(count)
  }

  const changeCheckOutCount = (count) => {
    setCheckOutCounter(count)
  }


  return (
    <StyledGrid style={{ gridColumnStart: "1", gridColumnEnd: "2" }}>
      <StyledKpi>
        <StyledIconBackground>
          <BiBed />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 20px/26px Poppins" }}>
            8,461
          </div>
          <div
            style={{
              font: "normal normal 300 12px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            New Booking
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "2", gridColumnEnd: "3" }}>
        <StyledIconBackground>
          <BsCalendarCheck />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 20px/26px Poppins" }}>963</div>
          <div
            style={{
              font: "normal normal 300 12px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Scheduled Room
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "3", gridColumnEnd: "4" }}>
        <StyledIconBackground>
          <BiLogIn />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 20px/26px Poppins" }}>{checkInCounter}</div>
          <div
            style={{
              font: "normal normal 300 12px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check In
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "4", gridColumnEnd: "5" }}>
        <StyledIconBackground>
          <BiLogOut />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 20px/26px Poppins" }}>{checkOutCounter}</div>
          <div
            style={{
              font: "normal normal 300 12px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check Out
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledBigPanel
        style={window.innerWidth > 1890 ? {
          gridColumnStart: "1",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "4",
          minHeight: '580px',
          minWidth: '700px'
        } : {
          gridColumnStart: "1",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "4",
          minHeight: '400px',
          minWidth: '500px'
        }}
      >
        <Calendar setActualDate={setActualDate} changeCheckInCount={changeCheckInCount} changeCheckOutCount={changeCheckOutCount}/>
      </StyledBigPanel>
      <StyledBigPanel
        style={window.innerWidth > 1890 ? {
          gridColumnStart: "3",
          gridColumnEnd: "5",
          gridRowStart: "2",
          gridRowEnd: "4",
          minHeight: '580px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0',
          paddingRight: '0'
        } : {
          gridColumnStart: "3",
          gridColumnEnd: "5",
          gridRowStart: "2",
          gridRowEnd: "4",
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0',
          paddingRight: '0'
        }}
      >
        <StyledBigPanelHeader>Reservation Stats</StyledBigPanelHeader>
        <ReservationChart />
      </StyledBigPanel>
      <StyledBigPanel
        style={window.innerWidth > 1890 ? {
          minHeight: "350px",
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "4",
          gridRowEnd: "5",
        } : {
          minHeight: "300px",
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "4",
          gridRowEnd: "5",
        }}
      >
        <StyledBigPanelHeader>Booking Schedule Data</StyledBigPanelHeader>
        <BookingScheduleData />
      </StyledBigPanel>
      <StyledBigPanel
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "5",
          gridRowEnd: "7",
          minHeight: '350px'
        }}
      >
        <StyledBigPanelHeader>Latest Review by Customers</StyledBigPanelHeader>
        <ReviewList />
      </StyledBigPanel>
    </StyledGrid>
  );
}

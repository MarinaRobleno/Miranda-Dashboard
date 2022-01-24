import React from "react";
import { StyledDivColumn, StyledDivRow } from "./BookDetail";
import styled from "styled-components";
import { StyledIconRoom } from "./RoomList";
import { selectBookings } from "../features/slices/bookingsSlice";
import { useSelector } from "react-redux";

const StyledBookingScheduleData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  @media (max-width: 1890px){
    height: 60px;
  }
`;

const StyledBookingScheduleNumber = styled.div`
border-radius: 12px;
min-width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
color: white;
@media (max-width: 1890px){
  height: 40px;
  min-width: 40px;
}
`

const StyledBookingScheduleRoom = styled.div`
font-weight: 700;
font-size: 20px;
@media (max-width: 1920px){
  font-size: 16px;
}
`

export function BookingScheduleData() {
  const myBooking = useSelector(selectBookings);

  return (
    <StyledDivColumn>
      <StyledBookingScheduleData>
        <StyledDivRow style={{ alignItems: "center" }}>
          <StyledIconRoom style={window.innerWidth > 1890 ? { backgroundColor: "grey" } : { height: '60px', width: '120px', backgroundColor: "grey" }}></StyledIconRoom>
          <StyledDivColumn>
            <StyledBookingScheduleRoom>ROOM 098 - Single bed</StyledBookingScheduleRoom>
            <div>Alicia Keys</div>
          </StyledDivColumn>
        </StyledDivRow>
        <StyledBookingScheduleNumber style={{backgroundColor: '#135846'}}>3</StyledBookingScheduleNumber>
      </StyledBookingScheduleData>
      <StyledBookingScheduleData>
        <StyledDivRow style={{ alignItems: "center" }}>
          <StyledIconRoom style={window.innerWidth > 1890 ? { backgroundColor: "grey" } : { height: '60px', width: '120px', backgroundColor: "grey" }}></StyledIconRoom>
          <StyledDivColumn>
          <StyledBookingScheduleRoom>ROOM 012 - Double bed</StyledBookingScheduleRoom>
            <div>Ariana Grande</div>
          </StyledDivColumn>
        </StyledDivRow>
        <StyledBookingScheduleNumber style={{backgroundColor: '#E23428'}}>2</StyledBookingScheduleNumber>
      </StyledBookingScheduleData>
      <StyledBookingScheduleData>
        <StyledDivRow style={{ alignItems: "center" }}>
          <StyledIconRoom style={window.innerWidth > 1890 ? { backgroundColor: "grey" } : { height: '60px', width: '120px', backgroundColor: "grey" }}></StyledIconRoom>
          <StyledDivColumn>
          <StyledBookingScheduleRoom>ROOM 103 - Suite</StyledBookingScheduleRoom>
            <div>Elthon John</div>
          </StyledDivColumn>
        </StyledDivRow>
        <StyledBookingScheduleNumber style={{backgroundColor: '#FF9C3A'}}>5</StyledBookingScheduleNumber>
      </StyledBookingScheduleData>
    </StyledDivColumn>
  );
}

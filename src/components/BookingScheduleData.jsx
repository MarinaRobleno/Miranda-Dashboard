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
  @media (max-width: 1890px) {
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
  @media (max-width: 1890px) {
    height: 40px;
    min-width: 40px;
  }
`;

const StyledBookingScheduleRoom = styled.div`
  font-weight: 700;
  font-size: 20px;
  @media (max-width: 1920px) {
    font-size: 16px;
  }
`;

export function BookingScheduleData({ actualDate }) {
  const myBooking = useSelector(selectBookings);
  const bookings = myBooking.booking;
  let checkIn = false;
  let checkOut = false;

  return (
    <StyledDivColumn>
      {bookings.map((book) => {
        checkIn =
          new Date(book.checkIn).getMonth() + 1 === actualDate.getMonth() &&
          new Date(book.checkIn).getFullYear() === actualDate.getFullYear();
        checkOut =
          new Date(book.checkOut).getMonth() + 1 === actualDate.getMonth() &&
          new Date(book.checkOut).getFullYear() === actualDate.getFullYear();
        if (checkIn || checkOut) {
          return (
            <StyledBookingScheduleData key={book._id}>
              <StyledDivRow style={{ alignItems: "center" }}>
                <StyledIconRoom
                  style={
                    window.innerWidth > 1890
                      ? { backgroundImage: "grey" }
                      : {
                          height: "60px",
                          width: "120px",
                          backgroundColor: "grey",
                        }
                  }
                  src={book.photo[0]}
                ></StyledIconRoom>
                <StyledDivColumn>
                  <StyledBookingScheduleRoom>
                    ROOM {book.roomNumber} - {book.roomType}
                  </StyledBookingScheduleRoom>
                  <div>{book.guest}</div>
                </StyledDivColumn>
              </StyledDivRow>
              <StyledDivRow>
                {checkIn ? (
                  <StyledBookingScheduleNumber
                    style={{ backgroundColor: "#135846" }}
                  >
                    {new Date(book.checkIn).getDate()}
                  </StyledBookingScheduleNumber>
                ) : null}
                {checkOut ? (
                  <StyledBookingScheduleNumber
                    style={{ backgroundColor: "#E23428" }}
                  >
                    {new Date(book.checkOut).getDate()}
                  </StyledBookingScheduleNumber>
                ) : null}
              </StyledDivRow>
            </StyledBookingScheduleData>
          );
        }
      })}
    </StyledDivColumn>
  );
}

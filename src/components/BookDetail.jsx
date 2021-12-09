import React from "react";
import { StyledBigPanel } from "./pages/Dashboard.jsx";
import styled from "styled-components";
import { selectBookings } from "../features/slices/bookingsSlice";
import { useSelector } from "react-redux";

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 50%;
  border-radius: 20px;
`;

const StyledDivRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export function BookDetail() {
  const myBooking = useSelector(selectBookings);
  return (
    <>
      {myBooking.booking
        .filter((book) => {
          if (book.id === myBooking.id){
              return book;
          };
        })
        .map((book) => (
          <StyledBigPanel
            style={{ width: "100%", display: "flex", padding: "0" }}
          >
            <StyledDetailsContainer>
              <StyledDivRow>
                <StyledDivColumn>
                  <div>{book.guest}</div>
                  <div>{book.id}</div>
                  <StyledDivRow>
                    <div>Icono</div>
                    <div>Send Message</div>
                  </StyledDivRow>
                </StyledDivColumn>
                <div>Icono de puntos</div>
              </StyledDivRow>
              <StyledDivRow>
                <StyledDivColumn>
                  <div>Check In</div>
                  <div>Fecha check in</div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <div>Check Out</div>
                  <div>Fecha check out</div>
                </StyledDivColumn>
              </StyledDivRow>
              <StyledDivRow>
                <StyledDivColumn>
                  <div>Room info</div>
                  <div>Room number</div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <div>Price</div>
                  <div>Price in numbers</div>
                </StyledDivColumn>
              </StyledDivRow>
              <div>Special Request</div>
              <StyledDivRow>Amenities</StyledDivRow>
            </StyledDetailsContainer>
            <StyledDetailsContainer
              style={{
                backgroundColor: "grey",
                margin: "0",
                justifyContent: "flex-end",
              }}
            >
              <StyledDivRow>Room Type</StyledDivRow>
              <StyledDivRow>Description</StyledDivRow>
            </StyledDetailsContainer>
          </StyledBigPanel>
        ))}
    </>
  );
}

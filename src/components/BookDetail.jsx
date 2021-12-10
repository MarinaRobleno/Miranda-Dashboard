import React from "react";
import { StyledBigPanel } from "./pages/Dashboard.jsx";
import styled from "styled-components";
import { selectBookings } from "../features/slices/bookingsSlice";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";
import { StyledLink } from "./SideBar";
import {
  BsFillTelephoneFill,
  BsChatDotsFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
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

const StyledDetailSection = styled.div`
  font: normal normal 500 16px/21px Poppins;
  color: #799283;
`;

export function BookDetail() {
  const myBooking = useSelector(selectBookings);
  return (
    <>
      {myBooking.booking
        .filter((book) => {
          if (book.id === myBooking.id) {
            return book;
          }
        })
        .map((book) => (
          <StyledBigPanel
            style={{ width: "100%", display: "flex", padding: "0" }}
          >
            <StyledDetailsContainer>
              <StyledDivRow>
                <StyledDivColumn>
                  <div style={{ font: "normal normal 600 30px/46px Poppins" }}>
                    {book.guest}
                  </div>
                  <StyledDetailSection>ID: {book.id}</StyledDetailSection>
                </StyledDivColumn>
                <BsThreeDotsVertical
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              </StyledDivRow>
              <StyledDivRow>
                <StyledDivColumn>
                  <StyledDetailSection>Check In</StyledDetailSection>
                  <div style={{ font: "normal normal 600 18px/46px Poppins" }}>
                    {book.checkIn}
                  </div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <StyledDetailSection>Check Out</StyledDetailSection>
                  <div style={{ font: "normal normal 600 18px/46px Poppins" }}>
                    {book.checkOut}
                  </div>
                </StyledDivColumn>
              </StyledDivRow>
              <div
                style={{
                  backgroundColor: "#F8F8F8",
                  width: "100%",
                  height: "3px",
                  margin: "0 auto",
                }}
              ></div>
              <StyledDivRow>
                <StyledDivColumn>
                  <StyledDetailSection>Room info</StyledDetailSection>
                  <div style={{ font: "normal normal 600 22px/46px Poppins" }}>
                    {book.room_number}
                  </div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <StyledDetailSection>Price</StyledDetailSection>
                  <div style={{ font: "normal normal 600 22px/46px Poppins" }}>
                    Price in numbers
                  </div>
                </StyledDivColumn>
              </StyledDivRow>
              <div>{book.special}</div>
              <StyledDivColumn>
                {" "}
                <StyledDetailSection>Amenities</StyledDetailSection>
                <div>List of amenities</div>
              </StyledDivColumn>
              <StyledLink to="/bookings">
                <Button
                  style={{
                    width: "59px",
                    height: "59px",
                    backgroundColor: "#135846",
                    font: "normal normal 500 25px/25px Poppins",
                  }}
                >
                  <RiArrowGoBackFill />
                </Button>
              </StyledLink>
            </StyledDetailsContainer>
            <StyledDetailsContainer
              style={{
                backgroundColor: "grey",
                margin: "0",
                padding: "60px",
                justifyContent: "flex-end",
              }}
            >
              <StyledDivRow
                style={{
                  font: "normal normal 600 24px/35px Poppins",
                  color: "white",
                }}
              >
                {book.roomType}
              </StyledDivRow>
              <StyledDetailSection style={{ color: "white" }}>
                Description
              </StyledDetailSection>
            </StyledDetailsContainer>
          </StyledBigPanel>
        ))}
    </>
  );
}

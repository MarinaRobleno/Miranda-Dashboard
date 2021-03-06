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
import ImageCarousel from "./ImageCarousel.jsx";

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  width: 50%;
  border-radius: 20px;
`;

export const StyledDivRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDetailSection = styled.div`
  font: normal normal 500 14px/21px Poppins;
  color: #799283;
`;

export const AmenitieChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;
  background-color: ${(props) => props.theme.colors.green_turquoise};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.green_dark};
  font-size: 12px;
  font-weight: 600;
  max-width: 120px;
  height: 60px;
  &:hover {
    color: ${(props) => props.theme.colors.green_turquoise};
    background-color: ${(props) => props.theme.colors.green_dark};
  }
`;

export function BookDetail() {
  const myBooking = useSelector(selectBookings);
  return (
    <>
      {myBooking.booking
        .filter((book) => {
          if (book._id === myBooking.id) {
            return book;
          }
        })
        .map((book) => (
          <StyledBigPanel
            style={{
              width: "100%",
              height: "600px",
              display: "flex",
              padding: "0",
            }}
          >
            <StyledDetailsContainer>
              <StyledDivRow>
                <StyledDivColumn>
                  <div style={{ font: "normal normal 600 20px/46px Poppins" }}>
                    {book.guest}
                  </div>
                  <StyledDetailSection>ID: {book._id}</StyledDetailSection>
                </StyledDivColumn>
              </StyledDivRow>
              <StyledDivRow>
                <StyledDivColumn>
                  <StyledDetailSection>Check In</StyledDetailSection>
                  <div style={{ font: "normal normal 600 14px/46px Poppins" }}>
                    {book.checkIn}
                  </div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <StyledDetailSection>Check Out</StyledDetailSection>
                  <div style={{ font: "normal normal 600 14px/46px Poppins" }}>
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
                  <StyledDetailSection>Room number</StyledDetailSection>
                  <div style={{ font: "normal normal 600 16px/46px Poppins" }}>
                    {book.roomNumber}
                  </div>
                </StyledDivColumn>
                <StyledDivColumn>
                  <StyledDetailSection>Price</StyledDetailSection>
                  <div style={{ font: "normal normal 600 16px/46px Poppins" }}>
                    ${book.price / 100}
                  </div>
                </StyledDivColumn>
              </StyledDivRow>
              <div>{book.special}</div>
              <StyledDivColumn>
                <StyledDetailSection>Amenities</StyledDetailSection>
                <StyledDivRow style={{ justifyContent: "left" }}>
                  {book.amenities.map((amenitie) => (
                    <AmenitieChip>{amenitie}</AmenitieChip>
                  ))}
                </StyledDivRow>
              </StyledDivColumn>
              <StyledLink to="/bookings">
                <Button
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#135846",
                    font: "normal normal 500 16px/25px Poppins",
                  }}
                >
                  <RiArrowGoBackFill />
                </Button>
              </StyledLink>
            </StyledDetailsContainer>
            <StyledDetailsContainer
              style={{
                position: "relative",
                backgroundColor: "grey",
                margin: "0",
                padding: "0",
                justifyContent: "flex-end",
              }}
            >
              <ImageCarousel bookImages={book.photo} status={book.bookStatus} />
              <StyledDivColumn
                style={{
                  position: "absolute",
                  width: "100%",
                  minHeight: "150px",
                  padding: "20px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  opacity: "50%",
                }}
              >
                <StyledDivRow
                  style={{
                    font: "normal normal 600 16px/35px Poppins",
                    color: "white",
                  }}
                >
                  {book.roomType}
                </StyledDivRow>
                <StyledDetailSection style={{ color: "white" }}>
                  {book.description}
                </StyledDetailSection>
              </StyledDivColumn>
            </StyledDetailsContainer>
          </StyledBigPanel>
        ))}
    </>
  );
}

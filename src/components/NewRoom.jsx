import React from "react";
import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { StyledHeader } from "./BookingList";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";

const StyledNewRoomPanel = styled(StyledBigPanel)`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px;
text-align: left;  
padding: 30px;
`;

const StyledNewRoomInput = styled.input`
width: 800px;
height: 40px;
font: normal normal 500 18px/25px Poppins;
border-color: ${(props) => props.theme.colors.green_dark};
border-radius: 12px;
padding: 0 20px;
margin-bottom: 20px;
background-color: ${(props) => props.theme.colors.search_bar_white};
    &:focus{
        outline: none;
    }
`

const StyledNewRoomSelect = styled.select`
min-width: 800px;
height: 40px;
font: normal normal 500 18px/25px Poppins;
border-color: ${(props) => props.theme.colors.green_dark};
border-radius: 12px;
padding: 0 20px;
margin-bottom: 20px;
background-color: ${(props) => props.theme.colors.search_bar_white};
    &:focus{
        outline: none;
    }
`

const StyledNewRoomSubmit = styled(StyledNewRoomInput)`
display: flex;
align-items: center;
justify-content: center;
font: normal normal 700 30px/25px Poppins;
background-color: ${(props) => props.theme.colors.green_dark};
border-color: ${(props) => props.theme.colors.search_bar_white};
color: ${(props) => props.theme.colors.search_bar_white};
margin: 0 auto;
width: 400px;
height: 80px;
cursor: pointer;
`

export function NewRoom() {
  const [newRoom, setNewRoom] = useState({
    photo: "",
    roomNumber: "",
    id: "",
    room_type: "",
    amenities: "",
    price: "",
    offer_price: "",
    cancellation: "",
    related_rooms: "",
  });

  return (
    <div style={{ width: "100%" }}>
      <StyledNewRoomPanel>
        <StyledBigPanelHeader style={{textAlign: 'center'}}>Add a New Room</StyledBigPanelHeader>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Photos</label>
          <StyledNewRoomInput type="text" />
          <label>Room Type</label>
          <StyledNewRoomSelect>
            <option>Single Bed</option>
            <option>Double Bed</option>
            <option>Double Superior</option>
            <option>Suite</option>
          </StyledNewRoomSelect>
          <label>Room Number</label>
          <StyledNewRoomInput type="text" />
          <label>Room ID</label>
          <StyledNewRoomInput type="text" />
          <label>Description</label>
          <StyledNewRoomInput type="text" />
          <label>Offer</label>
          <StyledNewRoomSelect>
            <option>YES</option>
            <option>NO</option>
          </StyledNewRoomSelect>
          <label>Price</label>
          <StyledNewRoomInput type="text" />
          <label>Offer Price</label>
          <StyledNewRoomInput type="text" />
          <label>Cancellation</label>
          <StyledNewRoomInput type="text" />
          <label>Related Rooms</label>
          <StyledNewRoomInput type="text" />
          <StyledNewRoomSubmit type="submit" value="Add Room" />
        </form>
      </StyledNewRoomPanel>
    </div>
  );
}

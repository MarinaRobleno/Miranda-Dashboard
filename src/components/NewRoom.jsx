import { preventContextMenu } from "@fullcalendar/common";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, selectRooms } from "../features/slices/roomsSlice";
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
  height: 50px;
  font: normal normal 500 18px/25px Poppins;
  border-color: ${(props) => props.theme.colors.green_dark};
  border-radius: 12px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

const StyledNewRoomSelect = styled.select`
  min-width: 800px;
  height: 40px;
  font: normal normal 500 18px/25px Poppins;
  border-color: ${(props) => props.theme.colors.green_dark};
  border-radius: 12px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

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
`;

export function NewRoom() {
    const myRooms = useSelector(selectRooms);
    const dispatch = useDispatch();

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

 const handleNewRoomSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newRoom));
 }

  return (
    <div style={{ width: "100%" }}>
      <StyledNewRoomPanel>
        <StyledBigPanelHeader style={{ textAlign: "center" }}>
          Add a New Room
        </StyledBigPanelHeader>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleNewRoomSubmit}>
          <label>Photos</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) => setNewRoom({ ...newRoom, photo: e.target.value })}
          />
          <label>Room Type</label>
          <StyledNewRoomSelect onChange={e => setNewRoom({...newRoom, room_type: e.target.value})}>
            <option selected>--Select type--</option>
            <option>Single Bed</option>
            <option>Double Bed</option>
            <option>Double Superior</option>
            <option>Suite</option>
          </StyledNewRoomSelect>
          <label>Room Number</label>
          <StyledNewRoomInput type="number" onChange={e => setNewRoom({...newRoom, roomNumber: e.target.value})} />
          <label>Room ID</label>
          <StyledNewRoomInput type="text" onChange={e => setNewRoom({...newRoom, id: e.target.value})} />
          <label>Description</label>
          <StyledNewRoomInput type="text" onChange={e => setNewRoom({...newRoom, amenities: e.target.value})} />
          <label>Offer</label>
          <StyledNewRoomSelect>
            <option selected>--Select option--</option>
            <option>YES</option>
            <option>NO</option>
          </StyledNewRoomSelect>
          <label>Price</label>
          <StyledNewRoomInput type="number" onChange={e => setNewRoom({...newRoom, price: e.target.value})}/>
          <label>Offer Price</label>
          <StyledNewRoomInput type="number" onChange={e => setNewRoom({...newRoom, offer_price: e.target.value})}/>
          <label>Cancellation</label>
          <StyledNewRoomInput type="text" onChange={e => setNewRoom({...newRoom, cancellation: e.target.value})} />
          <label>Related Rooms</label>
          <StyledNewRoomInput type="text" onChange={e => setNewRoom({...newRoom, related_rooms: e.target.value})} />
          <StyledNewRoomSubmit type="submit" value="Add Room" />
        </form>
      </StyledNewRoomPanel>
    </div>
  );
}

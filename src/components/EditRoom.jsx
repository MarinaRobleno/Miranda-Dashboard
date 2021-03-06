import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  edit,
  editRooms,
  selectRooms,
  selectRoomsId,
} from "../features/slices/roomsSlice";
import styled from "styled-components";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";
import { StyledLink } from "./SideBar";
import Button from "./Button";
import { StyledDivColumn, StyledDivRow } from "./BookDetail";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { notifyEdit, notifyError } from "./helpers/Toasts";

export const StyledNewRoomPanel = styled(StyledBigPanel)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 18px;
  text-align: left;
  padding: 30px;
  @media (max-width: 1890px) {
    font-size: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
`;

export const StyledNewRoomInput = styled.input`
  width: 400px;
  height: 30px;
  font: normal normal 500 14px/25px Poppins;
  border: none;
  border-radius: 5%;
  padding: 0 20px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
  @media (max-width: 1890px) {
    width: 300px;
    margin-bottom: 18px;
    font-size: 12px;
    padding: 0 15px;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 400px;
  height: 30px;
  font: normal normal 500 14px/25px Poppins;
  border: none;
  border-radius: 5%;
  padding: 0 20px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
  @media (max-width: 1890px) {
    width: 300px;
    margin-bottom: 18px;
    font-size: 12px;
  }
`;

export const StyledNewRoomSelect = styled.select`
  width: 400px;
  height: 30px;
  font: normal normal 500 14px/25px Poppins;
  border: none;
  border-radius: 5%;
  padding: 0 20px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
  @media (max-width: 1890px) {
    width: 300px;
    margin-bottom: 18px;
    font-size: 12px;
  }
`;

export const StyledNewRoomSubmit = styled(StyledNewRoomInput)`
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal 700 20px/25px Poppins;
  background-color: ${(props) => props.theme.colors.green_dark};
  border-color: ${(props) => props.theme.colors.search_bar_white};
  color: ${(props) => props.theme.colors.search_bar_white};
  width: 150px;
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
`;

export function EditRoom() {
  const dispatch = useDispatch();
  const myRoom = useSelector(selectRooms);
  const editingRoomId = useSelector(selectRoomsId);
  const [originalData, setOriginalData] = useState(
    myRoom
      .filter((room) => {
        if (room._id === editingRoomId) {
          return room;
        }
      })
      .map((room) => ({
        _id: room._id,
        roomType: room.roomType,
        photo: room.photo,
        roomNumber: room.roomNumber,
        description: room.description,
        amenities: room.amenities,
        price: room.price,
        offer_price: room.offer_price,
        status: room.status,
      }))
  );
  const [photoArray, setPhotoArray] = useState(originalData[0].photo.map((url)=>url));
  const [editingRoom, setEditingRoom] = useState(originalData[0]);
  const [roomTypeSelected, setRoomTypeSelected] = useState("");

  const [photoInputs, setPhotoInputs] = useState(3);

  const handleAddLink = (e) => {
    e.preventDefault();
    if (photoInputs < 5) {
      setPhotoInputs(photoInputs + 1);
    }
  };

  const handleNewRoomSubmit = (e) => {
    e.preventDefault();
    console.log(photoArray);
    console.log(editingRoom);
    try {
      console.log(editingRoom);
      dispatch(editRooms(editingRoom));
      notifyEdit();
    } catch (err) {
      notifyError();
    }
  };

  useEffect(() => {
    if (photoArray != []) {
      setEditingRoom({ ...editingRoom, photo: photoArray });
    }
  }, [photoArray]);

  return (
    <div style={{ width: "100%" }}>
      <StyledNewRoomPanel style={{ minHeight: "500px" }}>
        <StyledBigPanelHeader style={{ textAlign: "left" }}>
          EDIT ROOM {originalData[0].roomNumber}
        </StyledBigPanelHeader>
        <StyledForm
          id="newRoomForm"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleNewRoomSubmit}
        >
          <StyledDivRow>
            <StyledDivColumn
              style={
                window.innerWidth > 1890
                  ? { maxWidth: "400px" }
                  : { maxWidth: "300px" }
              }
            >
              <StyledNewRoomSelect
                value={roomTypeSelected}
                onChange={(e) => {
                  setRoomTypeSelected(e.target.value);
                  setEditingRoom({ ...editingRoom, roomType: e.target.value });
                }}
              >
                <option selected>--Room Type--</option>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
              </StyledNewRoomSelect>
              <StyledDivRow>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Room Number"
                  defaultValue={editingRoom.roomNumber}
                  onChange={(e) =>
                    setEditingRoom({
                      ...editingRoom,
                      roomNumber: e.target.value,
                    })
                  }
                />
              </StyledDivRow>
              <StyledTextArea
                type="text"
                placeholder="Description"
                style={{ height: "100px" }}
                rows="20"
                cols="50"
                defaultValue={editingRoom.description}
                onChange={(e) =>
                  setEditingRoom({
                    ...editingRoom,
                    description: e.target.value,
                  })
                }
              />
              <StyledDivRow>
                <div>$</div>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Price"
                  defaultValue={editingRoom.price}
                  style={
                    window.innerWidth > 1890
                      ? { width: "180px" }
                      : { width: "140px" }
                  }
                  onChange={(e) =>
                    setEditingRoom({ ...editingRoom, price: e.target.value })
                  }
                />
                <div>offer:</div>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Offer Price"
                  defaultValue={editingRoom.offer_price}
                  style={
                    window.innerWidth > 1890
                      ? { width: "180px" }
                      : { width: "140px" }
                  }
                  onChange={(e) =>
                    setEditingRoom({
                      ...editingRoom,
                      offer_price: e.target.value,
                    })
                  }
                />
              </StyledDivRow>
              <StyledLink to="/room" style={{ width: "40px" }}>
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
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledTextArea
                type="text"
                placeholder="Cancellation policy"
                style={{ height: "100px" }}
                rows="20"
                cols="50"
                defaultValue={editingRoom.cancellation}
                onChange={(e) =>
                  setEditingRoom({
                    ...editingRoom,
                    cancellation: e.target.value,
                  })
                }
              />
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                defaultValue={originalData[0].photo[0]}
                onChange={(e) =>
                  photoArray[0] = e.target.value
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                defaultValue={originalData[0].photo[1]}
                onChange={(e) =>
                  photoArray[1] = e.target.value
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                defaultValue={originalData[0].photo[2]}
                onChange={(e) =>
                  photoArray[2] = e.target.value
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                defaultValue={originalData[0].photo[3]}
                style={
                  photoInputs >= 4 ? { display: "block" } : { display: "none" }
                }
                onChange={(e) =>
                  photoArray[3] = e.target.value
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                defaultValue={originalData[0].photo[4]}
                style={
                  photoInputs === 5 ? { display: "block" } : { display: "none" }
                }
                onChange={(e) =>
                  photoArray[4] = e.target.value
                }
              />
              <Button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#135846",
                  font: "normal normal 500 16px/25px Poppins",
                }}
                onClick={handleAddLink}
              >
                <BsPlusLg />
              </Button>
            </StyledDivColumn>
          </StyledDivRow>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <StyledNewRoomSubmit
              style={{ fontSize: "16px" }}
              type="submit"
              value="Submit Changes"
            />
          </div>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, addRooms, selectRooms } from "../features/slices/roomsSlice";
import styled from "styled-components";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";
import { StyledLink } from "./SideBar";
import Button from "./Button";
import { StyledDivColumn, StyledDivRow } from "./BookDetail";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { notifyAdd, notifyError } from "./helpers/Toasts";

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

export function NewRoom() {
  const dispatch = useDispatch();
  const [photoArray, setPhotoArray] = useState([]);

  const [newRoom, setNewRoom] = useState({
    photo: [],
    status: "available",
  });

  useEffect(() => {
    setNewRoom({ ...newRoom, photo: photoArray });
  }, [photoArray]);

  const [photoInputs, setPhotoInputs] = useState(3);

  const handleAddLink = (e) => {
    e.preventDefault();
    if (photoInputs < 5) {
      setPhotoInputs(photoInputs + 1);
    }
  };

  const handleNewRoomSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addRooms(newRoom));
      notifyAdd();
    } catch (err) {
      notifyError();
    }
    const form = document.getElementById("newRoomForm");
    form.reset();
  };

  return (
    <div style={{ width: "100%" }}>
      <StyledNewRoomPanel style={{ minHeight: "500px" }}>
        <StyledBigPanelHeader style={{ textAlign: "left" }}>
          NEW ROOM
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
                onChange={(e) =>
                  setNewRoom({ ...newRoom, roomType: e.target.value })
                }
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
                  style={
                    window.innerWidth > 1890
                      ? { width: "180px" }
                      : { width: "140px" }
                  }
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, roomNumber: e.target.value })
                  }
                />
              </StyledDivRow>
              <StyledTextArea
                type="text"
                placeholder="Description"
                style={{ height: "100px" }}
                rows="20"
                cols="50"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, description: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Price"
                  style={
                    window.innerWidth > 1890
                      ? { width: "160px" }
                      : { width: "120px" }
                  }
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, price: e.target.value })
                  }
                />
                <StyledNewRoomInput
                  type="number"
                  placeholder="Offer Price"
                  style={
                    window.innerWidth > 1890
                      ? { width: "160px" }
                      : { width: "120px" }
                  }
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, offer_price: e.target.value })
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
                onChange={(e) =>
                  setNewRoom({ ...newRoom, cancellation: e.target.value })
                }
              />
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setPhotoArray((prev) => [...prev, e.target.value])
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setPhotoArray((prev) => [...prev, e.target.value])
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setPhotoArray((prev) => [...prev, e.target.value])
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                style={
                  photoInputs >= 4 ? { display: "block" } : { display: "none" }
                }
                onChange={(e) =>
                  setPhotoArray((prev) => [...prev, e.target.value])
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                style={
                  photoInputs === 5 ? { display: "block" } : { display: "none" }
                }
                onChange={(e) =>
                  setPhotoArray((prev) => [...prev, e.target.value])
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
            <StyledNewRoomSubmit type="submit" value="Add Room" />
          </div>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

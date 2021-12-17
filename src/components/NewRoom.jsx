import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, selectRooms } from "../features/slices/roomsSlice";
import styled from "styled-components";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";
import { StyledLink } from "./SideBar";
import Button from "./Button";
import { StyledDivColumn, StyledDivRow } from "./BookDetail";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";

const StyledNewRoomPanel = styled(StyledBigPanel)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 18px;
  text-align: left;
  padding: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const StyledNewRoomInput = styled.input`
  width: 400px;
  height: 30px;
  font: normal normal 500 14px/25px Poppins;
  border-color: ${(props) => props.theme.colors.green_dark};
  padding: 0 20px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

const StyledNewRoomSelect = styled.select`
  width: 400px;
  height: 30px;
  font: normal normal 500 14px/25px Poppins;
  border-color: ${(props) => props.theme.colors.green_dark};
  padding: 0 20px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

const StyledNewRoomSubmit = styled(StyledNewRoomInput)`
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
    status: "available",
  });

  const handleNewRoomSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newRoom));
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
            <StyledDivColumn style={{ maxWidth: "400px" }}>
              <StyledNewRoomSelect
                onChange={(e) =>
                  setNewRoom({ ...newRoom, room_type: e.target.value })
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
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, roomNumber: e.target.value })
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="Room ID"
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, id: e.target.value })
                  }
                />
              </StyledDivRow>
              <StyledNewRoomInput
                type="text"
                placeholder="Description"
                style={{ height: "100px" }}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, amenities: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Price"
                  style={{ width: "160px" }}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, price: e.target.value })
                  }
                />
                <label>Offer</label>
                <input type="checkbox"></input>
                <StyledNewRoomInput
                  type="number"
                  placeholder="Offer Price"
                  style={{ width: "160px" }}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, offer_price: e.target.value })
                  }
                />
              </StyledDivRow>
              <StyledLink to="/room">
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
              <StyledNewRoomInput
                type="text"
                placeholder="Cancellation policy"
                style={{ height: "100px" }}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, cancellation: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Related Rooms"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, related_rooms: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Related Rooms"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, related_rooms: e.target.value })
                }
              />
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewRoom({ ...newRoom, photo: e.target.value })
                }
              />
              <Button
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#135846",
                  font: "normal normal 500 16px/25px Poppins",
                }}
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

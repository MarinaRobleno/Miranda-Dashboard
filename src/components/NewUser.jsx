import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/slices/usersSlice";
import styled from "styled-components";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";
import { StyledLink } from "./SideBar";
import Button from "./Button";

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

export function NewUser() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    photo: "",
    name: "",
    job: "",
    id: "",
    mail: "",
    phone: "",
    status: "",
  });

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newUser));
    const form = document.getElementById("newUserForm");
    form.reset();
  };

  return (
    <div style={{ width: "100%" }}>
      <StyledNewRoomPanel>
        <StyledBigPanelHeader style={{ textAlign: "center" }}>
          Add a New User
        </StyledBigPanelHeader>
        <form
          id="newUserForm"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleNewUserSubmit}
        >
          <label>Photo</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) => setNewUser({ ...newUser, photo: e.target.value })}
          />
          <label>Name</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <label>Job</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) =>
              setNewUser({ ...newUser, job: e.target.value })
            }
          />
          <label>User ID</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
          />
          <label>Email</label>
          <StyledNewRoomInput
            type="text"
            onChange={(e) =>
              setNewUser({ ...newUser, mail: e.target.value })
            }
          />
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
            <StyledNewRoomSubmit type="submit" value="Add User" />
            <StyledLink to='/users'>
                <Button style={{backgroundColor: '#135846'}}>Back to Users</Button>
            </StyledLink>
          </div>
        </form>
      </StyledNewRoomPanel>
    </div>
  );
}

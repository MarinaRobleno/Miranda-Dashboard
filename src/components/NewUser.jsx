import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/slices/usersSlice";
import styled from "styled-components";
import { StyledBigPanel, StyledBigPanelHeader } from "./pages/Dashboard";
import { StyledLink } from "./SideBar";
import Button from "./Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import {
  StyledNewRoomPanel,
  StyledForm,
  StyledNewRoomInput,
  StyledTextArea,
  StyledNewRoomSelect,
  StyledNewRoomSubmit,
} from "./NewRoom";
import { StyledDivColumn, StyledDivRow } from "./BookDetail";

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
    <div style={{ width: '1000px' }}>
      <StyledNewRoomPanel style={{ minHeight: "400px" }}>
        <StyledBigPanelHeader style={{ textAlign: "left" }}>
          NEW USER
        </StyledBigPanelHeader>
        <StyledForm
          id="newUserForm"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleNewUserSubmit}
        >
          <StyledDivRow>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewUser({ ...newUser, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setNewUser({ ...newUser, mail: e.target.value })
                }
              />
              <StyledDivRow>
              <StyledNewRoomInput
                type="text"
                placeholder="Job"
                style={{ width: "180px" }}
                onChange={(e) =>
                  setNewUser({ ...newUser, job: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="ID"
                style={{ width: "180px" }}
                onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
              /></StyledDivRow>
            </StyledDivColumn>
          </StyledDivRow>
          <StyledDivRow
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <StyledNewRoomSubmit type="submit" value="Add User" />
            <StyledLink to="/users">
              <Button style={{ backgroundColor: "#135846" }}>
                <RiArrowGoBackFill />
              </Button>
            </StyledLink>
          </StyledDivRow>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

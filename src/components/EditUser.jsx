import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, selectUsers } from "../features/slices/usersSlice";
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

export function EditUser() {
  const dispatch = useDispatch();
  const myUser = useSelector(selectUsers);

  const [originalData, setOriginalData] = useState(
    myUser.users
      .filter((user) => {
        if (user.id === myUser.id) {
          return user;
        }
      })
      .map((user) => ({
        id: user.id,
        name: user.name,
        photo: user.photo,
        job: user.job,
        mail: user.mail,
        phone: user.phone,
        status: user.status,
        startDate: user.startDate,
        endDate: user.endDate,
      }))
  );

  const [editingUserId, setEditingId] = useState(myUser.id);
  const [editingUser, setEditingUser] = useState(originalData[0]);

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(editingUser));
    const form = document.getElementById("editUserForm");
    form.reset();
  };

  return (
    <div
      style={
        window.innerWidth > 1890 ? { width: "1000px" } : { width: "800px" }
      }
    >
      <StyledNewRoomPanel style={{ minHeight: "500px" }}>
        <StyledBigPanelHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ textAlign: "left" }}>
            EDIT USER (ID: {editingUserId} )
          </div>
          <StyledLink to="/users">
            <Button style={{ width: "50px", backgroundColor: "#135846" }}>
              <RiArrowGoBackFill />
            </Button>
          </StyledLink>
        </StyledBigPanelHeader>

        <StyledForm
          id="editUserForm"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleNewUserSubmit}
        >
          <StyledDivRow>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setEditingUser({ ...editingUser, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                  setEditingUser({ ...editingUser, name: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Start Date"
                  style={
                    window.innerWidth > 1890
                      ? { width: "180px" }
                      : { width: "140px" }
                  }
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      startDate: e.target.value,
                    })
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="End Date"
                  style={
                    window.innerWidth > 1890
                      ? { width: "180px" }
                      : { width: "140px" }
                  }
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, endDate: e.target.value })
                  }
                />
              </StyledDivRow>
              <StyledNewRoomInput
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setEditingUser({ ...editingUser, mail: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Phone"
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, phone: e.target.value })
                  }
                />
              </StyledDivRow>
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Job Desk"
                onChange={(e) =>
                  setEditingUser({ ...editingUser, job: e.target.value })
                }
              />
              <StyledTextArea
                placeholder="Job Description"
                style={{ height: "200px" }}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser,
                    jobDescription: e.target.value,
                  })
                }
              ></StyledTextArea>
            </StyledDivColumn>
          </StyledDivRow>
          <StyledDivRow
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
          </StyledDivRow>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

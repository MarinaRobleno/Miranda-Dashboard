import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUsers, selectUsers } from "../features/slices/usersSlice";
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
import { notifyEdit, notifyError } from "./helpers/Toasts";

export function EditLoggedUser() {
  const dispatch = useDispatch();
  const myUser = useSelector(selectUsers);

  const [originalData, setOriginalData] = useState(
    myUser.users
      .filter((user) => {
        if (user._id === myUser.id) {
          return user;
        }
      })
      .map((user) => ({
        _id: user._id,
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
    try {
      dispatch(editUsers(editingUser));
      localStorage.setItem("mail", editingUser.mail)
      notifyEdit();
    } catch (err) {
      notifyError();
    }
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
            EDIT USER {originalData[0].name}
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
                defaultValue={editingUser.photo}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Full Name"
                defaultValue={editingUser.name}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, name: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Start Date"
                  defaultValue={editingUser.startDate}
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
                  defaultValue={editingUser.endDate}
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
                defaultValue={editingUser.mail}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, mail: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Phone"
                  defaultValue={editingUser.phone}
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
                defaultValue={editingUser.job}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, job: e.target.value })
                }
              />
              <StyledTextArea
                placeholder="Job Description"
                style={{ height: "200px" }}
                defaultValue={editingUser.jobDescription}
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

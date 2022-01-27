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
    status: 'inactive',
  });

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    dispatch(add(newUser));
    const form = document.getElementById("newUserForm");
    form.reset();
  };

  return (
    <div style={window.innerWidth > 1890 ? { width: "1000px" } : {width: '800px'}}>
      <StyledNewRoomPanel style={{ minHeight: "500px" }}>
        <StyledBigPanelHeader style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ textAlign: "left" }}>NEW USER</div>
          <StyledLink to="/users">
            <Button style={{width: '50px', backgroundColor: "#135846" }}>
              <RiArrowGoBackFill />
            </Button>
          </StyledLink>
        </StyledBigPanelHeader>

        <StyledForm
          id="newUserForm"
          style={{ display: "flex", flexDirection: "column"  }}
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
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Start Date"
                  style={window.innerWidth > 1890 ? { width: "180px" } : {width: "140px"}}
                  onChange={(e) =>
                    setNewUser({ ...newUser, startDate: e.target.value })
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="End Date"
                  style={window.innerWidth > 1890 ? { width: "180px" } : {width: "140px"}}
                  onChange={(e) =>
                    setNewUser({ ...newUser, endDate: e.target.value })
                  }
                />
              </StyledDivRow>
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
                  placeholder="Phone"
                  style={window.innerWidth > 1890 ? { width: "180px" } : {width: "140px"}}
                  onChange={(e) =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="ID"
                  style={window.innerWidth > 1890 ? { width: "180px" } : {width: "140px"}}
                  onChange={(e) =>
                    setNewUser({ ...newUser, id: e.target.value })
                  }
                />
              </StyledDivRow>
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Job Desk"
                onChange={(e) =>
                  setNewUser({ ...newUser, job: e.target.value })
                }
              />
              <StyledTextArea
                placeholder="Job Description"
                style={{height: '200px' }}
                onChange={(e) =>
                  setNewUser({ ...newUser, jobDescription: e.target.value })
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
            <StyledNewRoomSubmit type="submit" value="Add User" />
          </StyledDivRow>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

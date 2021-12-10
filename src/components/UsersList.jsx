import React from "react";
import { useState } from "react";
import {
  StyledData,
  StyledHeader,
  StyledTable,
  StyledFilterMenu,
  StyledMenuItem,
  StyledFilterHeader,
  StyledSelect,
  StyledSearchContainer,
  StyledSearchBar,
  StyledSearchIcon,
} from "./BookingList";
import Button from "./Button";
import { StyledLink } from "./SideBar";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { remove, orderBy, selectUsers } from '../features/slices/usersSlice';

export const StyledDeleteUser = styled(TiDelete)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export function UsersList() {
    const myUsers = useSelector(selectUsers);
    const dispatch = useDispatch();

  const [filteredTerm, setFilteredTerm] = useState("");

  const handleSearchUser = (e) => {
    setFilteredTerm(e.target.value);
  };

  const handleDeleteUser = (user) => {
      dispatch(remove(user));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem>All Users</StyledMenuItem>
          <StyledMenuItem>Active Users</StyledMenuItem>
          <StyledMenuItem>Inactive Users</StyledMenuItem>
        </StyledFilterMenu>
        <StyledSearchContainer>
          <StyledSearchBar
            placeholder="Search user"
            onChange={handleSearchUser}
          />
          <StyledSearchIcon />
        </StyledSearchContainer>
        <div style={{ display: "flex" }}>
          <StyledLink to="./new-user">
            <Button
              style={{
                width: "200px",
                height: "49px",
                backgroundColor: "#135846",
              }}
            >
              + New User
            </Button>
          </StyledLink>
        </div>
      </StyledFilterHeader>

      <StyledTable>
        <StyledHeader>
          <th class="header-table-sector">Id</th>
          <th class="header-table-sector">Name</th>
          <th class="header-table-sector">Mail</th>
          <th class="header-table-sector">Status</th>
        </StyledHeader>
        {myUsers.users
          .filter((user) => {
            if (filteredTerm == "") {
              return user;
            } else if (
              String(user.name)
                .toLowerCase()
                .includes(filteredTerm.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => (
            <StyledData>
              <td className="data-element">{user.id}</td>
              <td className="data-element">{user.name}</td>
              <td className="data-element">{user.mail}</td>
              <td className="data-element">Status</td>
              <td className="data-element">
                <StyledDeleteUser onClick={() => handleDeleteUser(user)}/>
              </td>
            </StyledData>
          ))}
      </StyledTable>
    </div>
  );
}

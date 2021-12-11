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
import { remove, orderBy, selectUsers } from "../features/slices/usersSlice";

export const StyledDeleteUser = styled(TiDelete)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export function UsersList() {
  const myUsers = useSelector(selectUsers);
  const dispatch = useDispatch();

  const [filteredTerm, setFilteredTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSearchUser = (e) => {
    setFilteredTerm(e.target.value);
  };

  const handleDeleteUser = (user) => {
    dispatch(remove(user));
  };

  const handleFilterItem = (e) => {
    e.preventDefault();
    setSelectedFilter(e.target.id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem
            id="all"
            onClick={handleFilterItem}
            style={
              selectedFilter === "all"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            All Users
          </StyledMenuItem>
          <StyledMenuItem
            id="active"
            onClick={handleFilterItem}
            style={
              selectedFilter === "active"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            Active Users
          </StyledMenuItem>
          <StyledMenuItem
            id="inactive"
            onClick={handleFilterItem}
            style={
              selectedFilter === "inactive"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            Inactive Users
          </StyledMenuItem>
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
          .filter((user) => {
            if (selectedFilter == 'active'){
              return user.status == 'active'
            }else if (selectedFilter == 'inactive'){
              return user.status == 'inactive'
            }else{
              return user;
            }
          })
          .map((user) => (
            <StyledData>
              <td className="data-element">{user.id}</td>
              <td className="data-element">{user.name}</td>
              <td className="data-element">{user.mail}</td>
              <td className="data-element">{user.status}</td>
              <td className="data-element">
                <StyledDeleteUser onClick={() => handleDeleteUser(user)} />
              </td>
            </StyledData>
          ))}
      </StyledTable>
    </div>
  );
}

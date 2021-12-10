import React from "react";
import { useState } from "react";
import users from "../data/users";
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
  StyledSearchIcon
} from "./BookingList";
import Button from "./Button";
import { StyledLink } from './SideBar';

export function UsersList() {

    const [filteredTerm, setFilteredTerm] = useState("");

    
    const handleSearchUser = (e) => {
        setFilteredTerm(e.target.value);
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
        <div style={{display:'flex'}}>
          <StyledLink to="./new-user">
            <Button
              style={{ width: "200px", height:'49px', backgroundColor: "#135846" }}
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
          <th class='header-table-sector'>Status</th>
        </StyledHeader>
        {users
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
          </StyledData>
        ))}
      </StyledTable>
    </div>
  );
}

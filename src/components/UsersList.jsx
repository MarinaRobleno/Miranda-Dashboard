import React from "react";
import { useState, useEffect } from "react";
import {
  StyledData,
  StyledHeader,
  StyledTable,
  StyledFilterMenu,
  StyledMenuItem,
  StyledFilterHeader,
  StyledDataElement,
  StyledSearchContainer,
  StyledSearchBar,
  StyledSearchIcon,
  StyledFooter,
} from "./BookingList";
import Button from "./Button";
import { StyledLink } from "./SideBar";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { remove, orderBy, selectUsers } from "../features/slices/usersSlice";
import {
  StyledTablePagination,
  StyledPaginationButton,
  StyledNewButton,
} from "./RoomList";
import { PaginationNumbers } from "./helpers/PaginationNumbers";
import { GoTriangleDown } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

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
  const [orderBySth, setOrderBySth] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [totalPosts, setTotalPosts] = useState(myUsers.users.length);

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const handleAlphabet = (e) => {
    e.preventDefault();
    if (!orderBySth) {
      setOrderBySth(e.target.id);
      dispatch(orderBy(e.target.id));
    } else {
      setOrderBySth("");
      dispatch(orderBy(""));
    }
  };

  useEffect(() => {
    const filteredList = myUsers.users.filter((user) => {
      if (selectedFilter == "active") {
        return user.status == "active";
      } else if (selectedFilter == "inactive") {
        return user.status == "inactive";
      } else {
        return user;
      }
    });
    setTotalPosts(filteredList.length);
    setCurrentPage(1);
  }, [selectedFilter]);

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
            <StyledNewButton>+ New User</StyledNewButton>
          </StyledLink>
        </div>
      </StyledFilterHeader>

      <StyledTable>
        <StyledHeader>
          <th class="header-table-sector">Photo</th>
          <th class="header-table-sector">Id</th>
          <th
            style={
              orderBySth === "name"
                ? {
                    cursor: "pointer",
                    color: "#135846",
                    display: "flex",
                    alignItems: "center",
                  }
                : { cursor: "pointer", display: "flex", alignItems: "center" }
            }
            class="header-table-sector"
          >
            Name
            {orderBySth ? (
              <GrFormClose id="name" onClick={handleAlphabet} />
            ) : (
              <GoTriangleDown id="name" onClick={handleAlphabet} />
            )}
          </th>
          <th class="header-table-sector">Start Date</th>
          <th class="header-table-sector">Job Desk</th>
          <th class="header-table-sector">Mail</th>
          <th class="header-table-sector">Phone</th>
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
            if (selectedFilter == "active") {
              return user.status == "active";
            } else if (selectedFilter == "inactive") {
              return user.status == "inactive";
            } else {
              return user;
            }
          })
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((user) => (
            <StyledData>
              <img style={{ maxWidth: "50px" }} src={user.photo} />
              <StyledDataElement>{user.id}</StyledDataElement>
              <StyledDataElement>{user.name}</StyledDataElement>
              <StyledDataElement>{user.startDate}</StyledDataElement>
              <StyledDataElement>{user.job}</StyledDataElement>
              <StyledDataElement>{user.mail}</StyledDataElement>
              <StyledDataElement>{user.phone}</StyledDataElement>
              {user.status === "active" ? (
                <StyledDataElement style={{ color: "#5AD07A" }}>
                  {user.status.toUpperCase()}
                </StyledDataElement>
              ) : (
                <StyledDataElement style={{ color: "#E23428" }}>
                  {user.status.toUpperCase()}
                </StyledDataElement>
              )}
              <StyledDataElement>
                <StyledDeleteUser onClick={() => handleDeleteUser(user)} />
              </StyledDataElement>
            </StyledData>
          ))}
      </StyledTable>
      <StyledFooter>
        {postPerPage > totalPosts ? (
          <div style={{ fontSize: "14px" }}>
            Showing {totalPosts} of {totalPosts} Data
          </div>
        ) : postPerPage * currentPage > totalPosts ? (
          <div style={{ fontSize: "14px" }}>
            Showing{" "}
            {postPerPage * currentPage -
              postPerPage -
              (postPerPage - totalPosts)}{" "}
            of {totalPosts} Data
          </div>
        ) : (
          <div style={{ fontSize: "14px" }}>
            Showing {postPerPage * currentPage} of {totalPosts} Data
          </div>
        )}
      <StyledTablePagination>
        {currentPage === 1 ? null : (
          <StyledPaginationButton onClick={handleGoLeft}>
            Previous
          </StyledPaginationButton>
        )}
        <PaginationNumbers
          postPerPage={postPerPage}
          totalPosts={totalPosts}
          currentPage={currentPage}
          changePage={changePage}
        />
        {currentPage ===
        Math.ceil(myUsers.users.length / postPerPage) ? null : (
          <StyledPaginationButton onClick={handleGoRight}>
            Next
          </StyledPaginationButton>
        )}
      </StyledTablePagination>
      </StyledFooter>
    </div>
  );
}

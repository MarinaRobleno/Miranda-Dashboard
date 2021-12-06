import React from "react";
import Button from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import {
  remove,
  orderBy,
  selectBookings,
} from "../features/slices/bookingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const StyledFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const StyledFilterMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledMenuItem = styled.div`
  padding: 13px 26px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_grey_light_5};
  cursor: pointer;
`;

export const StyledFilterBar = styled.input`
  width: 351px;
  height: 57px;
  border: none;
  padding: 15px;
  font: normal normal 300 14px/21px Poppins;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

export const StyledCalendarBar = styled.input`
width: 200px;
height: 57px;
border: none;
padding: 15px;
font: normal normal 300 14px/21px Poppins;
background-color: ${(props) => props.theme.colors.search_bar_white};
&:focus {
  outline: none;
}
`;

export const StyledSelect = styled.select`
  width: 129px;
  height: 49px;
  border: 1px solid #135846;
  border-radius: 12px;
  text-align: center;
  margin-left: 20px;
`;

export const StyledSelectOption = styled.option`
  font: normal normal 600 16px/25px Poppins;
  background-color: none;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.green_dark};
`;

export const StyledTable = styled.table`
  text-align: left;
  min-width: 100%;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main_white};
  color: ${(props) => props.theme.colors.letter_grey_dark};
`;

export const StyledHeader = styled.tr`
  font: normal normal 600 16px/25px Poppins;
`;

export const StyledData = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001a;
  }
`;

export function BookingList() {
  const myBooking = useSelector(selectBookings);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredTerm, setFilteredTerm] = useState("");

  const removeBooking = (book) => {
    dispatch(remove(book));
  };

  const handleFilterItem = (e) => {
    e.preventDefault();
    const newFilter = e.target.id;
    setSelectedFilter(newFilter);
  };

  const handleSearchGuest = (e) => {
    setFilteredTerm(e.target.value);
  };

  const handleNewOldSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };

  const handleStartDate = (e) => {
    e.preventDefault();
    const newStartDate = e.target.value;
    setDateRange((prev) => ({ ...prev, start: newStartDate }));
  };

  const handleEndDate = (e) => {
    e.preventDefault();
    const newEndDate = e.target.value;
    setDateRange((prev) => ({ ...prev, end: newEndDate }));
  };

  const handleOrderBySth = (e) => {
    e.preventDefault();
    const newOrderBy = e.target.id;
    dispatch(orderBy(newOrderBy))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem id="all" onClick={handleFilterItem}>
            All Bookings
          </StyledMenuItem>
          <StyledMenuItem id="in" onClick={handleFilterItem}>
            Checking In
          </StyledMenuItem>
          <StyledMenuItem id="out" onClick={handleFilterItem}>
            Checking Out
          </StyledMenuItem>
          <StyledMenuItem id="progress" onClick={handleFilterItem}>
            In Progress
          </StyledMenuItem>
        </StyledFilterMenu>
        <StyledFilterBar
          placeholder="Search guest"
          onChange={handleSearchGuest}
        />
        <div>
          <div style={{ display: "inline", width: "100%" }}>
            <StyledCalendarBar type="date" onChange={handleStartDate} />
            <StyledCalendarBar type="date" onChange={handleEndDate} />
          </div>
          <StyledSelect value={select} onChange={handleNewOldSelect}>
            <option selected>Order By...</option>
            <option value={"newest"}>Newest</option>
            <option value={"oldest"}>Oldest</option>
          </StyledSelect>
        </div>
      </StyledFilterHeader>
      <StyledTable>
        <StyledHeader>
          <th style={{cursor: 'pointer'}} id='guest' onClick={handleOrderBySth}>Guest</th>
          <th style={{cursor: 'pointer'}} id='orderDate' onClick={handleOrderBySth}>Order date</th>
          <th style={{cursor: 'pointer'}} id='checkIn' onClick={handleOrderBySth}>Check in</th>
          <th style={{cursor: 'pointer'}} id='checkOut' onClick={handleOrderBySth}>Check out</th>
          <th>Special Request</th>
          <th>Room Type</th>
          <th>Status</th>
        </StyledHeader>
        {myBooking
          .filter((book) => {
            if (dateRange.start === "" && dateRange.end === "") {
              return book;
            } else if (
              book.checkIn >= dateRange.start &&
              book.checkOut < dateRange.end
            ) {
              return book;
            }
          })
          .filter((book) => {
            if (selectedFilter === "all" || selectedFilter === "") {
              return book;
            } /*else if (selectedFilter === "in") {
              return book.hasOwnProperty("checkIn");
            } else if (selectedFilter === "out") {
              return book.hasOwnProperty("checkOut");
            } else if (selectedFilter === "progress") {
              return book.hasOwnProperty("inProgress");
            }*/
          })
          .filter((book) => {
            if (filteredTerm == "") {
              return book;
            } else if (
              String(book.guest)
                .toLowerCase()
                .includes(filteredTerm.toLowerCase())
            ) {
              return book;
            }
          })
          .map((book) => (
            <StyledData>
              <td className="data-element">
                <div>{book.guest}</div>
                {book.id}
              </td>
              <td className="data-element">{book.orderDate}</td>
              <td className="data-element">{book.checkIn}</td>
              <td className="data-element">{book.checkOut}</td>
              <td className="data-element">
                <Button notes>View Notes</Button>
              </td>
              <td className="data-element">{book.roomType}</td>
              <td className="data-element">
                <Button checkIn name="Check In">
                  Check In
                </Button>
              </td>
              <td className="data-element">
                <AiOutlineDelete
                  onClick={() => removeBooking(book)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </StyledData>
          ))}
      </StyledTable>
    </div>
  );
}

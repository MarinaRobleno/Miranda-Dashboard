import React from "react";
import Button from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { remove, orderBy, selectBookings } from "../features/slices/bookingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const StyledFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

export const StyledSelect = styled.select``;

export const StyledTable = styled.table`
  text-align: left;
  min-width: 100%;
  min-height: 700px;
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

  const removeBooking = (book) => {
    dispatch(remove(book));
  };

  const [select, setSelect] = useState("");

  const handleNewOldSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem>All Bookings</StyledMenuItem>
          <StyledMenuItem>Checking In</StyledMenuItem>
          <StyledMenuItem>Checking Out</StyledMenuItem>
          <StyledMenuItem>In Progress</StyledMenuItem>
        </StyledFilterMenu>
        <div>
          <StyledSelect>Date</StyledSelect>
          <StyledSelect value={select} onChange={handleNewOldSelect}>
            <option selected>Order By...</option>
            <option value={"newest"}>
              Newest
            </option>
            <option value={"oldest"}>Oldest</option>
          </StyledSelect>
        </div>
      </StyledFilterHeader>
      <StyledTable>
        <StyledHeader>
          <th class="header-table-sector">Guest</th>
          <th class="header-table-sector">Order date</th>
          <th class="header-table-sector">Check in</th>
          <th class="header-table-sector">Check out</th>
          <th class="header-table-sector">Special Request</th>
          <th class="header-table-sector">Room Type</th>
          <th class="header-table-sector">Status</th>
        </StyledHeader>
        {myBooking.map((book) => (
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

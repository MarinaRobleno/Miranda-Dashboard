import React from "react";
import Button from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { remove, selectBookings } from "../features/slices/bookingsSlice";
import { useSelector, useDispatch } from 'react-redux';

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
  const myBooking = useSelector(selectBookings)
  const dispatch = useDispatch();

  const removeBooking = (book) => {
    dispatch(remove(book));
    
}


  return (
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
            <Button checkIn name="Check In" >
              Check In
            </Button>
          </td>
          <td className="data-element">
            <AiOutlineDelete onClick={() => removeBooking(book)} style={{ cursor: "pointer" }}  />
          </td>
        </StyledData>
      ))}
    </StyledTable>
  );
}

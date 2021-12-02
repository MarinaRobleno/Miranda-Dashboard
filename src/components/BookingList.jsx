import React from "react";
import booking from "../data/booking";
import Button from "./Button";
import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

export const StyledTable = styled.table`
  text-align: left;
  min-width: 100%;
  min-height: 700px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main_white};
`;

export const StyledHeader = styled.tr`
  color: ${(props) => props.theme.colors.letter_grey_dark};
  font: normal normal 600 16px/25px Poppins;
`;

export const StyledData = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001a;
  }
`;

export const StyledDataElement = styled.td`
  display: flex;
  flex-direction: row;
`;

export function BookingList() {
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
      {booking.map((book) => (
        <StyledData>
          <td className="data-element">
            {book.guest}
            {book.id}
          </td>
          <td className="data-element">{book.orderDate}</td>
          <td className="data-element">{book.checkIn}</td>
          <td className="data-element">{book.checkOut}</td>
          <td className='data-element'>
            <Button notes>View Notes</Button>
          </td>
          <td className="data-element">{book.roomType}</td>
          <td className="data-element">
            <Button checkIn name="Check In">
              Check In
            </Button>
          </td>
          <td className="data-element">
            <FiMoreVertical style={{ cursor: "pointer" }} />
          </td>
        </StyledData>
      ))}
    </StyledTable>
  );
}

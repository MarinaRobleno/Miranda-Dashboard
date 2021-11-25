import React from "react";
import booking from "../data/booking";
import { Button } from "./Button";
import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

const StyledTable = styled.table`
  max-width: 1475px;
  border-radius: 20px;
`;

const StyledHeader = styled.tr`
  color: ${(props) => props.theme.colors.letter_grey_dark};
  font: normal normal 600 16px/25px Poppins;
`;
const StyledData = styled.tr``;

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
        <tr className="data-card">
          <td className="data-element">
            {book.guest}
            {book.id}
          </td>
          <td className="data-element">{book.orderDate}</td>
          <td className="data-element">{book.checkIn}</td>
          <td className="data-element">{book.checkOut}</td>
          <td className="data-element">{book.special}</td>
          <td className="data-element">{book.roomType}</td>
          <td className="data-element">
            <Button color="#5AD07A" name="Booked" />
          </td>
          <td className="data-element">
            <FiMoreVertical style={{ cursor: "pointer" }} />
          </td>
        </tr>
      ))}
    </StyledTable>
  );
}

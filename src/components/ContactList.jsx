import React, { useEffect } from "react";
import {
  StyledData,
  StyledFilterMenu,
  StyledMenuItem,
  StyledFilterHeader,
  StyledSelect,
  StyledHeader,
  StyledTable,
  StyledDataElement,
} from "./BookingList";
import Button from "./Button";
import {
  selectContact,
  orderBy,
  archive,
} from "../features/slices/contactSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledArchiveButton = styled(Button)`
  &:hover{
    background-color:  ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.main_white};
  }
`

export function ContactList() {
  const myContact = useSelector(selectContact);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const handleNewOldSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };

  const handleArchive = (contact) => {
    if (!myContact.archived.includes(contact)) {
      dispatch(archive(contact))
    }
{/*    const archivedButton = document.getElementById(contact.id);
    archivedButton.style.backgroundColor = "#E23428";
archivedButton.style.color = "#FFFFFF";*/}
  };

  const handleShowArchived = () => {
    setShowArchived(true);
  };

  const handleShowAll = () => {
    setShowArchived(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem id="all" onClick={handleShowAll} style={showArchived === false ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            All Contacts
          </StyledMenuItem>
          <StyledMenuItem id="archived" onClick={handleShowArchived} style={showArchived === true ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            Archived
          </StyledMenuItem>
        </StyledFilterMenu>
        <StyledSelect value={select} onChange={handleNewOldSelect}>
          <option selected>Order By...</option>
          <option value={"newest"}>Newest</option>
          <option value={"oldest"}>Oldest</option>
        </StyledSelect>
      </StyledFilterHeader>
      <StyledTable>
        <StyledHeader>
          <th className="header-table-sector">Id</th>
          <th className="header-table-sector">Date</th>
          <th className="header-table-sector">Customer</th>
          <th className="header-table-sector">Mail</th>
          <th className="header-table-sector">Phone</th>
          <th className="header-table-sector">Comment</th>
        </StyledHeader>
        {showArchived
          ? myContact.archived.map((contact) => (
              <StyledData>
                <StyledDataElement>{contact.id}</StyledDataElement>
                <StyledDataElement>{contact.date}</StyledDataElement>
                <StyledDataElement>{contact.customer}</StyledDataElement>
                <StyledDataElement>{contact.mail}</StyledDataElement>
                <StyledDataElement>{contact.phone}</StyledDataElement>
                <StyledDataElement>{contact.comment}</StyledDataElement>
              </StyledData>
            ))
          : myContact.reviewedContact.map((contact) => (
              <StyledData>
                <StyledDataElement>{contact.id}</StyledDataElement>
                <StyledDataElement>{contact.date}</StyledDataElement>
                <StyledDataElement>{contact.customer}</StyledDataElement>
                <StyledDataElement>{contact.mail}</StyledDataElement>
                <StyledDataElement>{contact.phone}</StyledDataElement>
                <StyledDataElement>{contact.comment}</StyledDataElement>
                <StyledDataElement>
                  <StyledArchiveButton
                    id={contact.id}
                    archive
                    onClick={() => handleArchive(contact)}
                  >
                    Archive
                  </StyledArchiveButton>
                </StyledDataElement>
              </StyledData>
            ))}
      </StyledTable>
    </div>
  );
}

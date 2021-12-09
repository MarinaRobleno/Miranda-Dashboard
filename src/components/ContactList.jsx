import React from "react";
import {
  StyledData,
  StyledFilterMenu,
  StyledMenuItem,
  StyledFilterHeader,
  StyledSelect,
  StyledHeader,
  StyledTable,
} from "./BookingList";
import Button from "./Button";
import { selectContact, orderBy, remove } from "../features/slices/contactSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ContactList() {
  const myContact = useSelector(selectContact);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [archived, setArchived] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const handleNewOldSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };

  const handleArchive = (contact) => {
    if (!archived.includes(contact)) {
      setArchived((prev) => [...prev, contact]);
    }
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
          <StyledMenuItem id="all" onClick={handleShowAll}>
            All Contacts
          </StyledMenuItem>
          <StyledMenuItem id="archived" onClick={handleShowArchived}>
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
          <th className="header-table-sector">Action</th>
        </StyledHeader>
        {showArchived
          ? archived.map((contact) => (
              <StyledData>
                <td className="data-element">{contact.id}</td>
                <td className="data-element">{contact.date}</td>
                <td className="data-element">{contact.customer}</td>
                <td className="data-element">{contact.mail}</td>
                <td className="data-element">{contact.phone}</td>
                <td className="data-element">{contact.comment}</td>
              </StyledData>
            ))
          : myContact.map((contact) => (
              <StyledData>
                <td className="data-element">{contact.id}</td>
                <td className="data-element">{contact.date}</td>
                <td className="data-element">{contact.customer}</td>
                <td className="data-element">{contact.mail}</td>
                <td className="data-element">{contact.phone}</td>
                <td className="data-element">{contact.comment}</td>
                <td className="data-element">
                  <Button
                    id={contact.id}
                    archive
                    onClick={() => handleArchive(contact)}
                  >
                    Archive
                  </Button>
                </td>
              </StyledData>
            ))}
      </StyledTable>
    </div>
  );
}

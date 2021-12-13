import React from "react";
import { useSelector } from "react-redux";
import { selectContact } from "../../features/slices/contactSlice";
import { ContactList } from "../ContactList";
import { ReviewList } from "../ReviewList";
import { StyledBigPanel } from "./Dashboard";

export function Contact() {
  const myContact = useSelector(selectContact);

  return (
    <div style={{ display: "grid", width: "100%" }}>
      {myContact.contact.length > 0 ?<StyledBigPanel
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '300px',
          background: 'none',
        }}
      >
        <ReviewList />
      </StyledBigPanel> : null}
      <ContactList />
    </div>
  );
}

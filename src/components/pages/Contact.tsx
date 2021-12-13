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
      <StyledBigPanel
        style={{
          width: "100%",
          minHeight: "180px",
          marginBottom: "40px",
          overflowY: "hidden",
          overflowX: "auto",
          background: 'none',
          padding: '0',
        }}
      >
        <ReviewList />
      </StyledBigPanel>
      <ContactList />
    </div>
  );
}

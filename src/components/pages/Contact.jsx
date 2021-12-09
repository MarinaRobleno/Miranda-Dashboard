import React from "react";
import { ContactList } from "../ContactList";
import { ReviewList } from "../ReviewList";
import { StyledBigPanel } from "./Dashboard";

export function Contact() {
  return (
    <div style={{ display: "grid", width: "100%" }}>
      <StyledBigPanel
        style={{
          width: "100%",
          minHeight: "433px",
          marginBottom: "40px",
          overflowY: "hidden",
          overflowX: "auto",
        }}
      >
        <ReviewList />
      </StyledBigPanel>
      <ContactList />
    </div>
  );
}

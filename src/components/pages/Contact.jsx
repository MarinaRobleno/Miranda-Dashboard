import React from "react";
import { ContactList } from "../ContactList";
import {
  StyledBigPanel,
  StyledBigPanelHeader,
  StyledReviewPanel,
  StyledDeleteReview,
} from "./Dashboard";
import { selectContact } from "../../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";

export function Contact() {
  const myContact = useSelector(selectContact);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledBigPanel
        style={{
          minHeight: "433px",
          marginBottom: "40px",
        }}
      >
        <StyledBigPanelHeader>Latest Review by Customers</StyledBigPanelHeader>
        <div style={{display: 'flex'}}>
        {myContact.map((contact) => (
          <StyledReviewPanel>
            <div style={{ color: "#4E4E4E", lineHeight: "28px" }}>
              {contact.comment}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <img
                style={{
                  backgroundColor: "grey",
                  width: "56px",
                  height: "56px",
                }}
              />
              <div>
                <div style={{ color: "#262626", fontWeight: "600" }}>
                  {contact.customer}
                </div>
                <div style={{ color: "#799283", fontSize: "14px" }}>
                  {contact.date}
                </div>
              </div>
              <StyledDeleteReview />
            </div>
          </StyledReviewPanel>
        ))}
        </div>
      </StyledBigPanel>
      <ContactList />
    </div>
  );
}

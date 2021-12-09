import React from "react";
import {
  StyledBigPanel,
  StyledBigPanelHeader,
  StyledReviewPanel,
  StyledDeleteReview,
} from "./pages/Dashboard";
import { selectContact, remove } from "../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";

export function ReviewList() {
  const myContact = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleDeleteReview = (contact) => {
    dispatch(remove(contact));
  };

  const handlePopUp = (contact) => {
    alert(contact.comment);
  };
  return (
    <>
      <StyledBigPanelHeader>Latest Review by Customers</StyledBigPanelHeader>
      <div style={{ display: "flex" }}>
        {myContact.map((contact) => (
          <StyledReviewPanel>
            <div
              style={{ color: "#4E4E4E", lineHeight: "28px" }}
              onClick={() => handlePopUp(contact)}
            >
              {contact.comment}
            </div>
            <div style={{ color: "#4E4E4E", lineHeight: "28px" }}>
              {contact.date}
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
                  {contact.mail}
                </div>
                <div style={{ color: "#799283", fontSize: "14px" }}>
                  {contact.phone}
                </div>
              </div>
              <StyledDeleteReview onClick={() => handleDeleteReview(contact)} />
            </div>
          </StyledReviewPanel>
        ))}
      </div>
    </>
  );
}

import React, { useState } from "react";
import {
  StyledBigPanel,
  StyledBigPanelHeader,
  StyledReviewPanel,
  StyledDeleteReview,
} from "./pages/Dashboard";
import { selectContact, remove } from "../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";

export const StyledPaginationReviews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledGreenRightIcon = styled(BsFillArrowRightSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green_dark};
  backgroundColor: ${(props) => props.theme.colors.main_white};
  cursor: pointer;
`;

export const StyledGreenLeftIcon = styled(BsFillArrowLeftSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green_dark};
  cursor: pointer;
`;

export function ReviewList() {
  const myContact = useSelector(selectContact);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleDeleteReview = (contact) => {
    dispatch(remove(contact));
  };

  const handlePopUp = (contact) => {
    alert(contact.comment);
  };
  return (
    <>
      <div style={{ display: "flex", width: '100%' }}>
        {myContact.contact
          
          .map((contact) => (
            <StyledReviewPanel>
              <div>
                {contact.subject}
              </div>
              <div
                style={{ color: "#4E4E4E", lineHeight: "20px" }}
                onClick={() => handlePopUp(contact)}
              >
                {contact.comment}
              </div>
              <div style={{ color: "#4E4E4E", lineHeight: "20px" }}>
                {contact.date}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <img src={contact.photo} />
                <div>
                  <div style={{ color: "#262626", fontWeight: "600" }}>
                    {contact.customer}
                  </div>
                  <div style={{ color: "#799283", fontSize: "12px" }}>
                    {contact.mail}
                  </div>
                  <div style={{ color: "#799283", fontSize: "12px" }}>
                    {contact.phone}
                  </div>
                </div>
                <StyledDeleteReview
                  onClick={() => handleDeleteReview(contact)}
                />
              </div>
            </StyledReviewPanel>
          )).reverse().slice(indexOfFirstPost, indexOfLastPost)}
      </div>
      <StyledPaginationReviews style={currentPage === 1 ? {justifyContent: 'right'} : currentPage === Math.ceil(myContact.contact.length / postPerPage) ? {justifyContent: 'left'} : null}>
        {currentPage === 1 ? null : (
          <StyledGreenLeftIcon onClick={handleGoLeft} />
        )}
        {currentPage ===
        Math.ceil(myContact.contact.length / postPerPage) ? null : (
          <StyledGreenRightIcon onClick={handleGoRight} />
        )}
      </StyledPaginationReviews>
    </>
  );
}

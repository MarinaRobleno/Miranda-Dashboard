import React from "react";
import styled from "styled-components";
import Button from "../Button";

export const StyledNumberContainer = styled.div`
`

export const StyledNumberRow = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
margin: 0;
padding: 0 16px;
`

export const StyledNumberButton = styled(Button)`
width: 35px;
height: 35px;
background-color: white;
border: 1px solid ${(props) => props.theme.colors.green_dark};
color: ${(props) => props.theme.colors.green_dark};
text-align: center;
font: normal normal 500 12px/25px Poppins;
&:hover{
  color: white;
  background-color: ${(props) => props.theme.colors.green_dark};
`

export function PaginationNumbers({ postPerPage, totalPosts, currentPage, changePage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledNumberContainer>
      <StyledNumberRow className="pagination">
        {pageNumbers.map((number) => (
          <StyledNumberButton onClick={() => changePage(number)} style={currentPage == number ? { color: 'white', backgroundColor:'#135846' } : null} key={number} className="page-item">
            {number}
          </StyledNumberButton>
        ))}
      </StyledNumberRow>
    </StyledNumberContainer>
  );
}

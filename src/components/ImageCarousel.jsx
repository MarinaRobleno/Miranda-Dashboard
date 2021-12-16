import React from 'react'
import styled from 'styled-components';
import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill,
  } from "react-icons/bs";

export const StyledCarousel = styled.div`
height: 100%;
width: 100%;
`

export const StyledCarouselImage = styled.img`
`

export const StyledCarouselNav = styled.div`
`

export const StyledCarouselRightIcon = styled(BsFillArrowRightSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.letter_grey_medium_3};
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.colors.border_grey_light_5};
    border: 1px solid ${(props) => props.theme.colors.main_white};
    border-radius: 5px;
  }
`;

export const StyledCarouselLefttIcon = styled(BsFillArrowLeftSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.letter_grey_medium_3};
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.colors.border_grey_light_5};
    border: 1px solid ${(props) => props.theme.colors.main_white};
    border-radius: 5px;
  }
`;

export default function ImageCarousel( {bookImages} ) {
    return (
        <StyledCarousel className='carousel'>
            {bookImages.map((image) => (
                <StyledCarouselImage src={image} />
            ))}
            <StyledCarouselNav>
                <StyledCarouselLefttIcon />
                <StyledCarouselRightIcon />
            </StyledCarouselNav>
        </StyledCarousel>
    )
}

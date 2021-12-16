import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

export const StyledCarousel = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
`;

export const StyledCarouselImage = styled.img`
  display: none;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCarouselNav = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  margin-top: -100px;
`;

export const StyledCarouselRightIcon = styled(BsFillArrowRightSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.letter_grey_medium_3};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.border_grey_light_5};
    border: 1px solid ${(props) => props.theme.colors.main_white};
    border-radius: 5px;
  }
`;

export const StyledCarouselLefttIcon = styled(BsFillArrowLeftSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.letter_grey_medium_3};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.border_grey_light_5};
    border: 1px solid ${(props) => props.theme.colors.main_white};
    border-radius: 5px;
  }
`;

export default function ImageCarousel({ bookImages }) {
  const [position, setPosition] = useState(0);

  const handleRightClick = () => {
    if (position < bookImages.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const handleLeftClick = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(bookImages.length - 1);
    }
  };

  return (
    <StyledCarousel className="carousel">

        {bookImages.map((image) => (
          <StyledCarouselImage
            id={bookImages.indexOf(image)}
            src={image}
            style={
              bookImages.indexOf(image) === position
                ? { display: "block" }
                : { display: "none" }
            }
          />
        ))}

      {bookImages.length > 1 ? (
        <StyledCarouselNav>
          <StyledCarouselLefttIcon onClick={handleLeftClick} />
          <StyledCarouselRightIcon onClick={handleRightClick} />
        </StyledCarouselNav>
      ) : null}
    </StyledCarousel>
  );
}

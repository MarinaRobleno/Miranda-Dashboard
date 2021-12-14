import { useState, useCallback, useEffect } from "react";
import { RoomListCard } from "./RoomListCard";
import update from "immutability-helper";
import {
  StyledFilterHeader,
  StyledFilterMenu,
  StyledHeader,
  StyledMenuItem,
  StyledSelect,
  StyledTable,
} from "./BookingList";
import { orderBy, selectRooms } from "../features/slices/roomsSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import styled from "styled-components";
import { StyledLink } from "./SideBar";
import { PaginationNumbers } from "./helpers/PaginationNumbers";

export const StyledIconRoom = styled.img`
  width: 150px;
  height: 77px;
  object-fit: cover;
  margin-right: 20px;
`;

export const StyledTablePagination = styled.div`
display: flex;
justify-content: right;
`;

export const StyledPaginationButton = styled(Button)`
  width: 60px;
  height: 35px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.green_dark};
  color: ${(props) => props.theme.colors.green_dark};
  text-align: center;
  font: normal normal 500 12px/25px Poppins;
  &:hover{
    color: white;
    background-color: ${(props) => props.theme.colors.green_dark};
  }
`;

export const RoomList = () => {
  const myRooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  const [cards, setCards] = useState(myRooms);
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  /*
  const handleSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };*/

  const handleSwitchFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.id);
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );
  const renderCard = (card, index) => {
    return (
      <RoomListCard
        key={card.id}
        index={index}
        id={card.id}
        price={card.price}
        photo={card.photo}
        roomNumber={card.roomNumber}
        room_type={card.room_type}
        amenities={card.amenities}
        status={card.status}
        offer_price={card.offer_price}
        moveCard={moveCard}
      />
    );
  };
  return (
    <>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem
            id="all"
            onClick={handleSwitchFilter}
            style={
              filter === "all"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            All Rooms
          </StyledMenuItem>
          <StyledMenuItem
            id="available"
            onClick={handleSwitchFilter}
            style={
              filter === "available"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            Available Rooms
          </StyledMenuItem>
          <StyledMenuItem
            id="booked"
            onClick={handleSwitchFilter}
            style={
              filter === "booked"
                ? { color: "#135846", borderBottom: "2px solid #135846" }
                : { color: "#6E6E6E" }
            }
          >
            Booked Rooms
          </StyledMenuItem>
        </StyledFilterMenu>
        <div style={{ display: "flex" }}>
          <StyledLink to="./new-room">
            <Button
              style={{
                width: "150px",
                height: "49px",
                backgroundColor: "#135846",
              }}
            >
              + New Room
            </Button>
          </StyledLink>
          {/*<StyledSelect value={select} onChange={handleSelect}>
            <option selected>Order By Price...</option>
            <option value={"higher"}>Higher</option>
            <option value={"lower"}>Lower</option>
  </StyledSelect>*/}
        </div>
      </StyledFilterHeader>
      <StyledTable>
        <StyledHeader>
          <th className="header-table-sector">Room Number</th>
          <th className="header-table-sector">Room Type</th>
          <th className="header-table-sector">Amenities</th>
          <th className="header-table-sector">Price</th>
          <th className="header-table-sector">Offer Price</th>
          <th className="header-table-sector">Status</th>
        </StyledHeader>
        {cards
          .filter((card) => {
            if (filter === "all") {
              return card;
            } else if (filter === "available") {
              return card.status === "available";
            } else {
              return card.status === "booked";
            }
          })
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((card, i) => renderCard(card, i))}
      </StyledTable>
      <StyledTablePagination>
        {currentPage === 1 ? null : (
          <StyledPaginationButton onClick={handleGoLeft}>
            Previous
          </StyledPaginationButton>
        )}
        <PaginationNumbers postPerPage={postPerPage} totalPosts={cards.length} currentPage={currentPage}/>
        {currentPage === Math.ceil(cards.length / postPerPage) ? null : (
          <StyledPaginationButton onClick={handleGoRight}>
            Next
          </StyledPaginationButton>
        )}
      </StyledTablePagination>
    </>
  );
};

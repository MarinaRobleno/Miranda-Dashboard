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

export const RoomList = () => {
  const myRooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  const [cards, setCards] = useState(myRooms);
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
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
        offer_price={card.offer_price}
        moveCard={moveCard}
      />
    );
  };
  return (
    <>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem>All Rooms</StyledMenuItem>
          <StyledMenuItem>Available Rooms</StyledMenuItem>
          <StyledMenuItem>Booked Rooms</StyledMenuItem>
        </StyledFilterMenu>
        <div>
          <StyledLink to="/new-room">
            <Button
              style={{ width: "200px", backgroundColor: "#135846" }}
            >
              + New Room
            </Button>
          </StyledLink>
          <StyledSelect value={select} onChange={handleSelect}>
            <option selected>Order By Price...</option>
            <option value={"higher"}>Higher</option>
            <option value={"lower"}>Lower</option>
          </StyledSelect>
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
        {cards.map((card, i) => renderCard(card, i))}
      </StyledTable>

    </>
  );
};

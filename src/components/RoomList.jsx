import { useState, useCallback, useEffect } from "react";
import { RoomListCard } from "./RoomListCard";
import update from "immutability-helper";
import { getRooms } from "../utils/getData";
import roomData from "../data/rooms";
import {
  StyledData,
  StyledDataElement,
  StyledHeader,
  StyledTable,
} from "./BookingList";
import styled from "styled-components";

export const RoomList = () => {
  {
    const [cards, setCards] = useState(roomData);

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
  }
};


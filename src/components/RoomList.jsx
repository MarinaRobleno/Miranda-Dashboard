import { useState, useCallback, useEffect } from "react";
import { RoomListCard } from "./RoomListCard";
import update from "immutability-helper";
import { StyledHeader, StyledTable } from "./BookingList";
import { add, orderBy, selectRooms } from "../features/slices/roomsSlice";
import { useSelector, useDispatch } from "react-redux";

export const RoomList = () => {
  const myRooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  const [cards, setCards] = useState(myRooms);

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
};

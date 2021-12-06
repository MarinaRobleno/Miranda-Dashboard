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
import { add, orderBy, selectRooms } from "../features/slices/roomsSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import styled from "styled-components";

export const StyledModal = styled.div`
  display: none;
  position: absolute;
  width: 700px;
  height: 700px;
  left: 50%;
  margin-left: -350px;
  top: 60%;
  margin-top: -350px;
  padding: 30px;
  background-color: white;
  border: 1px solid grey;
`;

export const RoomList = () => {
  const myRooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  const [cards, setCards] = useState(myRooms);
  const [select, setSelect] = useState("");
  const [newRoom, setNewRoom] = useState({
    photo: "",
    roomNumber: "",
    id: "",
    room_type: "",
    amenities: "",
    price: "",
    offer_price: "",
    cancellation: "",
    related_rooms: "",
  });

  const handleOpenAddRoom = () => {
    const newRoomForm = document.getElementById("new-room-form");
    newRoomForm.style.display = "block";
  };

  const handlePhotosInput = (e) => {
    const newPhotosInput = e.target.value;
    setNewRoom((prev) => ({...prev, photo: newPhotosInput}))
  }
  const handleRoomNumberInput = (e) => {
    const newRoomNumberInput = e.target.value;
    setNewRoom((prev) => ({...prev, roomNumber: newRoomNumberInput}))
  }
  const handleIdInput = (e) => {
    const newIdInput = e.target.value;
    setNewRoom((prev) => ({...prev, id: newIdInput}))
  }
  const handleRoomTypeInput = (e) => {
    const newRoomTypeInput = e.target.value;
    setNewRoom((prev) => ({...prev, room_type: newRoomTypeInput}))
  }
  const handleAmenitiesInput = (e) => {
    const newAmenitiesInput = e.target.value;
    setNewRoom((prev) => ({...prev, amenities: newAmenitiesInput}))
  }
  const handlePriceInput = (e) => {
    const newPriceInput = e.target.value;
    setNewRoom((prev) => ({...prev, price: newPriceInput}))
  }
  const handleOfferPriceInput = (e) => {
    let newOfferPriceInput = '';
    if (e.target.value === 'YES'){
      newOfferPriceInput = newRoom.price/2;
    }else{
      newOfferPriceInput = newRoom.price;
    }
    setNewRoom((prev) => ({...prev, offer_price: newOfferPriceInput}))
  }
  const handleCancellationInput = (e) => {
    const newCancellationInput = e.target.value;
    setNewRoom((prev) => ({...prev, cancellation: newCancellationInput}))
  }
  const handleRelatedInput = (e) => {
    const newRelatedInput = e.target.value;
    setNewRoom((prev) => ({...prev, related_rooms: newRelatedInput}))
  }

  const handleAddNewRoom = (e) => {
    e.preventDefault();
    dispatch(add(newRoom))
  }

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
          <Button
            style={{ width: "200px", backgroundColor: "#135846" }}
            onClick={handleOpenAddRoom}
          >
            + New Room
          </Button>
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
      <StyledModal id="new-room-form">
        <div>Add a New Room</div>
        <form onSubmit={handleAddNewRoom} style={{ display: "flex", flexDirection: "column" }}>
          <label>Photos</label>
          <input type="text" onChange={handlePhotosInput}/>
          <label>Room Type</label>
          <select onChange={handleRoomTypeInput}>
            <option>Single Bed</option>
            <option>Double Bed</option>
            <option>Double Superior</option>
            <option>Suite</option>
          </select>
          <label>Room Number</label>
          <input type="text" onChange={handleRoomNumberInput}/>
          <label>Room ID</label>
          <input type="text" onChange={handleIdInput} />
          <label>Description</label>
          <input type="text" onChange={handleAmenitiesInput}/>
          <label>Offer</label>
          <select onChange={handleOfferPriceInput}>
            <option>YES</option>
            <option>NO</option>
          </select>
          <label>Price</label>
          <input type="text" onChange={handlePriceInput} />
          <label>Offer Price</label>
          <input type="text" />
          <label>Cancellation</label>
          <input type="text" onChange={handleCancellationInput} />
          <label>Related Rooms</label>
          <input type="text" onChange={handleRelatedInput} />
          <input type="submit" value="Add Room" />
        </form>
      </StyledModal>
    </>
  );
};

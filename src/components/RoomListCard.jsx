import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./helpers/ItemTypes";
import {
  StyledBinIcon,
  StyledData,
  StyledDataElement,
  StyledDataGuest,
} from "./BookingList";
import Button from "./Button";
import { StyledIconRoom } from "./RoomList";
import { remove, getId, selectRooms } from "../features/slices/roomsSlice";
import { useSelector, useDispatch } from "react-redux";
import { StyledEdit } from "./UsersList";
import { StyledLink } from "./SideBar";

export const RoomListCard = ({
  photo,
  roomNumber,
  id,
  roomType,
  amenities,
  price,
  offer_price,
  status,
  index,
  moveCard,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const myRooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  const handleEditRoom = (id) => {
    dispatch(getId(id))
  }

  const removeRoom = (id) => {
    dispatch(remove(id));
  };
  return (
    <StyledData ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <StyledDataGuest
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <StyledIconRoom src={photo[0]} />
        <div style={{ display: "inline-block" }}>
          <div style={{ display: "block", fontWeight: "600" }}>
            Room {roomNumber}
          </div>
          <div style={{ display: "block" }}>#{id}</div>
        </div>
      </StyledDataGuest>
      <StyledDataGuest>{roomType}</StyledDataGuest>
      <StyledDataGuest>{amenities}</StyledDataGuest>
      <StyledDataElement style={{ fontWeight: "600" }}>
        ${price / 100}/night
      </StyledDataElement>
      <StyledDataElement style={{ fontWeight: "600" }}>
        ${offer_price / 100}/night
      </StyledDataElement>
      <StyledDataElement>
        {status === "available" ? (
          <Button checkIn>Available</Button>
        ) : (
          <Button checkOut>Booked</Button>
        )}
      </StyledDataElement>
      <StyledDataElement>
        <StyledLink
          to={{
            pathname: `./${id}/edit`,
          }}
        >
          <StyledEdit onClick={() => handleEditRoom(id)}/>
        </StyledLink>
      </StyledDataElement>
      <StyledDataElement>
        {/*<StyledBinIcon onClick={() => removeRoom(id)}/>*/}
      </StyledDataElement>
    </StyledData>
  );
};

import { useState, useCallback, useEffect } from "react";
import { RoomListCard } from "./RoomListCard";
import update from "immutability-helper";
import {
  StyledFilterHeader,
  StyledFilterMenu,
  StyledFooter,
  StyledHeader,
  StyledMenuItem,
  StyledSelect,
  StyledTable,
} from "./BookingList";
import {
  fetchRooms,
  orderBy,
  selectRooms,
  selectRoomsLoading,
} from "../features/slices/roomsSlice";
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
  margin-top: 20px;
`;

export const StyledPaginationButton = styled(Button)`
  width: 60px;
  height: 35px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.green_dark};
  color: ${(props) => props.theme.colors.green_dark};
  text-align: center;
  font: normal normal 500 12px/25px Poppins;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.green_dark};
  }
`;

export const StyledNewButton = styled(Button)`
  width: 130px;
  height: 49px;
  background-color: ${(props) => props.theme.colors.green_dark};
  &:hover {
    color: ${(props) => props.theme.colors.green_dark};
    background-color: ${(props) => props.theme.colors.main_white};
  }
`;

export const RoomList = () => {
  const myRooms = useSelector(selectRooms);
  const loading = useSelector(selectRoomsLoading);
  const dispatch = useDispatch();

  const [cards, setCards] = useState([]);
  const [select, setSelect] = useState("roomNumber");
  const [filter, setFilter] = useState("all");

  const [totalPosts, setTotalPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  useEffect(() => {
    setCards(myRooms);
    setTotalPosts(myRooms.length);
  }, [myRooms]);

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
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

  useEffect(() => {
    const filteredList = cards.filter((card) => {
      if (filter === "all") {
        return card;
      } else if (filter === "available") {
        return card.status === "available";
      } else {
        return card.status === "booked";
      }
    });
    setTotalPosts(filteredList.length);
    setCurrentPage(1);
  }, [filter]);

  const renderCard = (card, index) => {
    return (
      <RoomListCard
        key={card._id}
        index={index}
        id={card._id}
        price={card.price}
        photo={card.photo}
        roomNumber={card.roomNumber}
        roomType={card.roomType}
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
            <StyledNewButton>+ New Room</StyledNewButton>
          </StyledLink>
        </div>
      </StyledFilterHeader>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <StyledTable>
          <StyledHeader>
            <th className="header-table-sector" style={{ paddingLeft: "10px" }}>
              Room Number
            </th>
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
      )}
      <StyledFooter>
        {postPerPage > totalPosts ? (
          <div style={{ fontSize: "14px" }}>
            Showing {totalPosts} of {totalPosts} Data
          </div>
        ) : postPerPage * currentPage > totalPosts ? (
          <div style={{ fontSize: "14px" }}>
            Showing{" "}
            {postPerPage * currentPage -
              (postPerPage * currentPage - totalPosts)}{" "}
            of {totalPosts} Data
          </div>
        ) : (
          <div style={{ fontSize: "14px" }}>
            Showing {postPerPage * currentPage} of {totalPosts} Data
          </div>
        )}
        <StyledPaginationButton
          style={{ width: "80px" }}
          onClick={() => {setPostPerPage(totalPosts); setCurrentPage(1)}}
        >
          Show all
        </StyledPaginationButton>
        <StyledTablePagination>
          {currentPage === 1 ? null : (
            <StyledPaginationButton onClick={handleGoLeft}>
              Previous
            </StyledPaginationButton>
          )}
          <PaginationNumbers
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            currentPage={currentPage}
            changePage={changePage}
          />
          {currentPage === Math.ceil(cards.length / postPerPage) || totalPosts <= 10 ? null : (
            <StyledPaginationButton onClick={handleGoRight}>
              Next
            </StyledPaginationButton>
          )}
        </StyledTablePagination>
      </StyledFooter>
    </>
  );
};

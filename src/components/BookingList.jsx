import React from "react";
import Button from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSearchAlt2, BiSidebar } from "react-icons/bi";
import styled from "styled-components";
import {
  remove,
  orderBy,
  detailed,
  selectBookings,
} from "../features/slices/bookingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { StyledLink } from "./SideBar";
import { StyledTablePagination, StyledPaginationButton } from "./RoomList";
import { PaginationNumbers } from "./helpers/PaginationNumbers";

export const StyledFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFilterMenu = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 50%;
`;

export const StyledMenuItem = styled.div`
padding: 0 10px 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_grey_light_5};
  cursor: pointer;
`;
export const StyledSearchContainer = styled.form`
  display: flex;
  align-items: center;
  max-width: 200px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  border: none;
  border-radius: 12px;
`;

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 15px;
  font: normal normal 500 12px/21px Poppins;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  background-color: ${(props) => props.theme.colors.search_bar_white};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt2)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  margin-right: 29px;
`;

export const StyledCalendarBar = styled.input`
  max-width: 120px;
  height: 40px;
  padding-left: 10px;
  border: none;
  border-radius: 12px;
  font: normal normal 300 10px/21px Poppins;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  max-width: 120px;
  height: 40px;
  border: 1px solid #135846;
  border-radius: 12px;
  padding: 5px;
  margin-left: 10px;
  font: normal normal 600 12px/21px Poppins;
  color: ${(props) => props.theme.colors.green_dark};
  background-color: ${(props) => props.theme.colors.search_bar_white};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const StyledSelectOption = styled.option`
  background-color: none;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.green_dark};
`;

export const StyledTable = styled.table`
  text-align: left;
  min-width: 100%;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main_white};
  color: ${(props) => props.theme.colors.letter_grey_dark};
`;

export const StyledHeader = styled.tr`
  font: normal normal 600 14px/25px Poppins;
`;

export const StyledData = styled.tr`
font-size: 13px;
  &:hover {
    box-shadow: 0px 4px 30px #0000001a;
  }
`;

export const StyledDataElement = styled.td`
padding: 10px 0;
`

export const StyledDetailIcon = styled(BiSidebar)`
  font-size: 18px;
  cursor: pointer;
`;

export const StyledBinIcon = styled(AiOutlineDelete)`
  font-size: 18px;
  cursor: pointer;
`;

export function BookingList() {
  const myBooking = useSelector(selectBookings);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredTerm, setFilteredTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [totalPosts, setTotalPosts] = useState(myBooking.booking.length)

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const removeBooking = (book) => {
    dispatch(remove(book));
  };

  const handleFilterItem = (e) => {
    e.preventDefault();
    setSelectedFilter(e.target.id);
  };

  const handleSearchGuest = (e) => {
    setFilteredTerm(e.target.value);
  };

  const handleNewOldSelect = (e) => {
    e.preventDefault();
    const newSelect = e.target.value;
    setSelect(newSelect);
    dispatch(orderBy(newSelect));
  };

  function convertDateFormat(string) {
    var info = string.split("-");
    return info[2] + "-" + info[0] + "-" + info[1];
  }

  const handleStartDate = (e) => {
    e.preventDefault();
    const newStartDate = e.target.value;
    console.log(newStartDate);
    setDateRange((prev) => ({ ...prev, start: newStartDate }));
  };

  const handleEndDate = (e) => {
    e.preventDefault();
    const newEndDate = e.target.value;
    console.log(newEndDate);
    setDateRange((prev) => ({ ...prev, end: newEndDate }));
    console.log(dateRange);
  };

  const handleOrderBySth = (e) => {
    e.preventDefault();
    const newOrderBy = e.target.id;
    dispatch(orderBy(newOrderBy));
  };

  const handleViewNotes = (request) => {
    if (request) {
      alert(request)
    } else {
      alert('No requests')
    }
  }

  const handleIdDetails = (id) => {
    dispatch(detailed(id))
  }

  useEffect(() => {
    const filteredList = myBooking.booking.filter((book) => {if (selectedFilter === "all") {
      return book;
    } else if (selectedFilter === "in") {
      return book.status === "in";
    } else if (selectedFilter === 'out') {
      return book.status === "out";
    
    }else{
      return book.status === 'progress';
    }})
    setTotalPosts(filteredList.length)
  }, [selectedFilter]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem id="all" onClick={handleFilterItem} style={selectedFilter === 'all' ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            All Bookings
          </StyledMenuItem>
          <StyledMenuItem id="in" onClick={handleFilterItem} style={selectedFilter === 'in' ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            Checking In
          </StyledMenuItem>
          <StyledMenuItem id="out" onClick={handleFilterItem} style={selectedFilter === 'out' ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            Checking Out
          </StyledMenuItem>
          <StyledMenuItem id="progress" onClick={handleFilterItem} style={selectedFilter === 'progress' ? {color: '#135846', borderBottom: '2px solid #135846'} : {color: '#6E6E6E'}}>
            In Progress
          </StyledMenuItem>
        </StyledFilterMenu>

        <StyledSearchContainer>
          <StyledSearchBar
            placeholder="Search guest"
            onChange={handleSearchGuest}
          />
          <StyledSearchIcon />
        </StyledSearchContainer>
        <div>
          <div style={{ display: "inline", width: "100%" }}>
            <StyledCalendarBar type="date" onChange={handleStartDate} />
            <StyledCalendarBar type="date" onChange={handleEndDate} />
          </div>
          <StyledSelect value={select} onChange={handleNewOldSelect}>
            <option selected>Order By...</option>
            <option value={"newest"}>Newest</option>
            <option value={"oldest"}>Oldest</option>
          </StyledSelect>
        </div>
      </StyledFilterHeader>
      <StyledTable>
        <StyledHeader>
          <th
            style={{ cursor: "pointer" }}
            id="guest"
            onClick={handleOrderBySth}
          >
            Guest
          </th>
          <th
            style={{ cursor: "pointer" }}
            id="orderDate"
            onClick={handleOrderBySth}
          >
            Order date
          </th>
          <th
            style={{ cursor: "pointer" }}
            id="checkIn"
            onClick={handleOrderBySth}
          >
            Check in
          </th>
          <th
            style={{ cursor: "pointer" }}
            id="checkOut"
            onClick={handleOrderBySth}
          >
            Check out
          </th>
          <th>Special Request</th>
          <th>Room Type</th>
          <th>Status</th>
          <th>Details</th>
        </StyledHeader>
        {myBooking.booking
          .filter((book) => {
            let convertedCheckIn = convertDateFormat(book.checkIn);
            let convertedCheckOut = convertDateFormat(book.checkOut);
            console.log(convertedCheckIn);
            console.log(convertedCheckOut);
            if (dateRange.start === "" || dateRange.end === "") {
              return book;
            }
            if (
              (convertedCheckIn >= dateRange.start &&
                convertedCheckIn <= dateRange.end) ||
              (dateRange.start >= convertedCheckIn &&
                dateRange.start <= convertedCheckOut)
            ) {
              return book;
            }
          })
          .filter((book) => {
            if (selectedFilter === "all" || selectedFilter === "") {
              return book;
            } else if (selectedFilter === "in") {
              return book.status === 'in';
            } else if (selectedFilter === "out") {
              return book.status === 'out'
            } else if (selectedFilter === "progress") {
              return book.status === 'progress'
            }
          })
          .filter((book) => {
            if (filteredTerm == "") {
              return book;
            } else if (
              String(book.guest)
                .toLowerCase()
                .includes(filteredTerm.toLowerCase())
            ) {
              return book;
            }
          })
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((book) => (
            <StyledData>
              <StyledDataElement>
                <div>{book.guest}</div>
                {book.id}
              </StyledDataElement>
              <StyledDataElement>{book.orderDate}</StyledDataElement>
              <StyledDataElement>{book.checkIn}</StyledDataElement>
              <StyledDataElement>{book.checkOut}</StyledDataElement>
              <StyledDataElement>
                {book.special ?
                  <Button notes onClick={() => handleViewNotes(book.special)}>View Notes</Button>
                  :
                  <Button noNotes >View Notes</Button>}
              </StyledDataElement>
              <StyledDataElement>
                <div>{book.roomType}</div>
                {book.room_number}
              </StyledDataElement>
              <StyledDataElement>
                {book.status === 'in' ? <Button checkIn name="Check In">
                  Check In
                </Button> :
                  book.status === 'out' ? <Button checkOut name="Check Out">
                    Check Out
                  </Button> : <Button inProgress name="In Progress">
                    In Progress
                  </Button>}
              </StyledDataElement>
              <StyledDataElement>
                <StyledLink to={{
                  pathname: `./${book.id}`
                }}>
                  <StyledDetailIcon onClick={() => handleIdDetails(book.id)} />
                </StyledLink>
              </StyledDataElement>
              <StyledDataElement>
                <StyledBinIcon onClick={() => removeBooking(book)} />
              </StyledDataElement>
            </StyledData>
          ))}
      </StyledTable>
      <StyledTablePagination>
        {currentPage === 1 ? null : (
          <StyledPaginationButton onClick={handleGoLeft}>
            Previous
          </StyledPaginationButton>
        )}
        <PaginationNumbers postPerPage={postPerPage} totalPosts={totalPosts} currentPage={currentPage} changePage={changePage}/>
        {currentPage === Math.ceil(myBooking.booking.length / postPerPage) ? null : (
          <StyledPaginationButton onClick={handleGoRight}>
            Next
          </StyledPaginationButton>
        )}
      </StyledTablePagination>
    </div>
  );
}

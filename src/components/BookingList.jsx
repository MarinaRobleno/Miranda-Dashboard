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
import { useState } from "react";
import { StyledLink } from "./SideBar";

export const StyledFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const StyledFilterMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledMenuItem = styled.div`
  padding: 13px 26px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_grey_light_5};
  cursor: pointer;
`;
export const StyledSearchContainer = styled.form`
  display: flex;
  align-items: center;
  max-width: 351px;
  height: 57px;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  border: none;
  border-radius: 12px;
`;

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 25px;
  font: normal normal 500 16px/21px Poppins;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  background-color: ${(props) => props.theme.colors.search_bar_white};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt2)`
  font-size: 35px;
  color: ${(props) => props.theme.colors.letter_grey_medium};
  margin-right: 29px;
`;

export const StyledCalendarBar = styled.input`
  width: 200px;
  height: 57px;
  border: none;
  padding: 15px;
  font: normal normal 300 14px/21px Poppins;
  background-color: ${(props) => props.theme.colors.search_bar_white};
  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  min-width: 129px;
  height: 49px;
  border: 1px solid #135846;
  border-radius: 12px;
  margin-left: 20px;
  padding: 13px;
  font: normal normal 600 14px/21px Poppins;
  color: ${(props) => props.theme.colors.green_dark};
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
  font: normal normal 600 16px/25px Poppins;
`;

export const StyledData = styled.tr`
  &:hover {
    box-shadow: 0px 4px 30px #0000001a;
  }
`;

export const StyledDetailIcon = styled(BiSidebar)`
  font-size: 20px;
  cursor: pointer;
`;

export const StyledBinIcon = styled(AiOutlineDelete)`
  font-size: 20px;
  cursor: pointer;
`;

export function BookingList() {
  const myBooking = useSelector(selectBookings);
  const dispatch = useDispatch();

  const [select, setSelect] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredTerm, setFilteredTerm] = useState("");

  const removeBooking = (book) => {
    dispatch(remove(book));
  };

  const handleFilterItem = (e) => {
    e.preventDefault();
    const newFilter = e.target.id;
    setSelectedFilter(newFilter);
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

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <StyledFilterHeader>
        <StyledFilterMenu>
          <StyledMenuItem id="all" onClick={handleFilterItem}>
            All Bookings
          </StyledMenuItem>
          <StyledMenuItem id="in" onClick={handleFilterItem}>
            Checking In
          </StyledMenuItem>
          <StyledMenuItem id="out" onClick={handleFilterItem}>
            Checking Out
          </StyledMenuItem>
          <StyledMenuItem id="progress" onClick={handleFilterItem}>
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
            } /*else if (selectedFilter === "in") {
              
            } else if (selectedFilter === "out") {
              
            } else if (selectedFilter === "progress") {
              
            }*/
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
          .map((book) => (
            <StyledData>
              <td className="data-element">
                <div>{book.guest}</div>
                {book.id}
              </td>
              <td className="data-element">{book.orderDate}</td>
              <td className="data-element">{book.checkIn}</td>
              <td className="data-element">{book.checkOut}</td>
              <td className="data-element">
                {book.special ?
                  <Button notes onClick={() => handleViewNotes(book.special)}>View Notes</Button>
                  :
                  <Button noNotes >View Notes</Button>}
              </td>
              <td className="data-element">
                <div>{book.roomType}</div>
                {book.room_number}
              </td>
              <td className="data-element">
                {book.status === 'in' ? <Button checkIn name="Check In">
                  Check In
                </Button> :
                  book.status === 'out' ? <Button checkOut name="Check Out">
                    Check Out
                  </Button> : <Button inProgress name="In Progress">
                    In Progress
                  </Button>}
              </td>
              <td className="data-element">
                <StyledLink to={{
                  pathname: `./${book.id}`
                }}>
                  <StyledDetailIcon onClick={() => handleIdDetails(book.id)} />
                </StyledLink>
              </td>
              <td className="data-element">
                <StyledBinIcon onClick={() => removeBooking(book)} />
              </td>
            </StyledData>
          ))}
      </StyledTable>
    </div>
  );
}

import "../../styles/App.scss";
import React from "react";
import { BookingList } from "../BookingList";
import {
  selectBookings,
} from "../../features/slices/bookingsSlice";
import { useSelector } from "react-redux";

export function Bookings() {
  const myBooking = useSelector(selectBookings);
  const loading = myBooking.loading;
  
  return (
    <>
      {loading ? <div>Loading...</div> : <BookingList />}
    </>
  );
}

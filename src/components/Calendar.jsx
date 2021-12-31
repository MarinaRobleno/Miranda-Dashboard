import React from "react";
import { useSelector } from "react-redux";
import { selectBookings } from "../features/slices/bookingsSlice";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import styled from "styled-components";

export function Calendar({changeCheckInCount, changeCheckOutCount}) {
  function convertDateFormat(string) {
    var info = string.split("-");
    return info[2] + "-" + info[0] + "-" + info[1];
  }
  const myBooking = useSelector(selectBookings);
  let checkIns = myBooking.booking.map((book) => {
    return {
      start: convertDateFormat(book.checkIn),
      id: book.id,
    };
  });
  let checkOuts = myBooking.booking.map((book) => {
    return {
      start: convertDateFormat(book.checkOut),
      id: book.id,
    };
  });

  changeCheckInCount(checkIns.length);
  changeCheckOutCount(checkOuts.length);

  /*let uniqueCheckIn = [
    ...new Set(
      myBooking.booking.map((book) => {
        return convertDateFormat(book.checkIn);
      })
    ),
  ];
  console.log(uniqueCheckIn);*/

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today",
      }}
      height="100%"
      eventSources={[
        {
          events: checkIns,
          color: "#135846",
        },
        {
          events: checkOuts,
          color: "#E23428",
        },
      ]}
      displayEventTime={false}
      eventDisplay="block"
    />
  );
}

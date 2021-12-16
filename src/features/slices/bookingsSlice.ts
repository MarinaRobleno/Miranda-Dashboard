import { createSlice } from "@reduxjs/toolkit";
import booking from "../../data/booking.js";

interface booking {
  id: string;
  guest: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  special: string;
  roomType: string;
  room_number: string;
  status: string;
}

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { booking: booking, id: "" },
  reducers: {
    add: (state, action) => {
      state.booking.push(action.payload)
      return state;
    },
    remove: (state, action) => {
      state.booking = state.booking.filter(
        (book) => book.id !== action.payload.id
      );
      return state;
    },
    detailed: (state, action) => {
      state.id = action.payload;
    },
    orderBy: (state, action) => {
      if (action.payload === "newest" || action.payload === "oldest") {
        action.payload === "newest"
          ? (state.booking = state.booking.sort((a, b) => {
              if (a.orderDate > b.orderDate) {
                return -1;
              }
              if (a.orderDate < b.orderDate) {
                return 1;
              }
              return 0;
            }))
          : (state.booking = state.booking.sort((a, b) => {
              if (a.orderDate > b.orderDate) {
                return 1;
              }
              if (a.orderDate < b.orderDate) {
                return -1;
              }
              return 0;
            }));
      } else if (
        action.payload === "guest" ||
        action.payload === "orderDate" ||
        action.payload === "checkIn" ||
        action.payload === "checkOut"
      ) {
        state.booking = state.booking.sort((a, b) => {
          if (a[action.payload] > b[action.payload]) {
            return 1;
          }
          if (a[action.payload] < b[action.payload]) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
});

export const selectBookings = (state) => state.bookings;

export const { add, remove, orderBy, detailed } = bookingsSlice.actions;

export default bookingsSlice.reducer;

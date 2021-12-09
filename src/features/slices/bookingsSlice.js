import { createSlice } from "@reduxjs/toolkit";
import booking from "../../data/booking.js";

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {booking: booking},
  reducers: {
    remove: (state, action) => {
      state.booking = state.booking.filter((book) => book.id !== action.payload.id);
      return state;
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

export const { remove, orderBy } = bookingsSlice.actions;

export default bookingsSlice.reducer;

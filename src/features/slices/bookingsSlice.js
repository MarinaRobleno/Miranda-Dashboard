import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booking from "../../data/booking.js";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await fetch("http://localhost:3000/api/bookings", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZjkyNTg0ZGE3MjkwMDAzNTY1ZWU2MCJ9LCJpYXQiOjE2NDM3MTgxNTd9.SDoXsi-EDdIwRmXm487Ok1whGSfilbTK2rnG73LwLD4",
      },
    })
      .then((data) => {console.log(data)})
      .catch((e) => console.log(e));
    console.log(response.json());
    const bookings = await response.json();
    return bookings;
  }
);

const sortedBooking = booking.sort(function (a, b) {
  if (a.orderDate > b.orderDate) {
    return -1;
  }
  if (a.orderDate < b.orderDate) {
    return 1;
  }
  return 0;
});

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { booking: [], id: "", loading: false },
  reducers: {
    add: (state, action) => {
      state.booking.push(action.payload);
      return state;
    },
    remove: (state, action) => {
      state.booking = state.booking.filter(
        (book) => book.id !== action.payload.id
      );
      return state;
    },
    edit: (state, action) => {
      state.booking = state.booking.map((book) =>
        book.id === action.payload.id
          ? { ...book, attribute: action.payload.attribute }
          : book
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
  extraReducers: {
    [fetchBookings.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBookings.fulfilled]: (state, action) => {
      state.loading = false;
      state.booking = [...state.booking, ...action.payload];
    },
    [fetchBookings.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const selectBookings = (state) => state.bookings;

export const { add, remove, orderBy, detailed } = bookingsSlice.actions;

export default bookingsSlice.reducer;

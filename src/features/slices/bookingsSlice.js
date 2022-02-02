import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booking from "../../data/booking.js";
import { getAPI } from "../../env.js";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookingList",
  async () => {
    return await getAPI("bookings").then((data) => {
      return data;
    });
  }
);

export const fetchBooking = createAsyncThunk(
  "bookings/fetchBooking",
  async ({ element }, thunkAPI) => {
    console.log(element);
    return await getAPI(`bookings/${element}`).then((data) => {
      console.log(data);
      return data;
    });
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
        (book) => book._id !== action.payload._id
      );
      return state;
    },
    edit: (state, action) => {
      state.booking = state.booking.map((book) =>
        book._id === action.payload._id
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
    /*[fetchBooking.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooking.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = payload;
    },
    [fetchBooking.rejected]: (state) => {
      state.loading = true;
    },*/

    [fetchBookings.pending]: (state) => {
      state.loading = true;
    },
    [fetchBookings.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = payload;
    },
    [fetchBookings.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const selectBookings = (state) => state.bookings;

export const { add, remove, orderBy, detailed } = bookingsSlice.actions;

export default bookingsSlice.reducer;

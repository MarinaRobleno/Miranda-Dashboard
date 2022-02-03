import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAPI, getAPI, patchAPI, postAPI } from "../../env.js";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    return await getAPI("bookings").then((data) => {
      return data;
    });
  }
);

export const addBookings = createAsyncThunk("bookings/addBookings", async (bookData) => {
  return await postAPI("bookings", bookData).then((data) => {
    return data;
  });
});

export const deleteBookings = createAsyncThunk(
  "bookings/deleteBookings",
  async (bookId) => {
    return await deleteAPI("bookings", bookId).then((data) => {
      return data;
    });
  }
);

export const editBookings = createAsyncThunk(
  "bookings/editBookings",
  async (bookData) => {
    return await patchAPI("bookings", bookData._id, bookData).then((data) => {
      return data;
    });
  }
);

/*const sortedBooking = booking.sort(function (a, b) {
  if (a.orderDate > b.orderDate) {
    return -1;
  }
  if (a.orderDate < b.orderDate) {
    return 1;
  }
  return 0;
});*/

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { booking: [], id: "", loading: false },
  reducers: {
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
    [addBookings.pending]: (state) => {
      state.loading = true;
    },
    [addBookings.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = [...state.booking, payload];
    },
    [addBookings.rejected]: (state) => {
      state.loading = true;
    },
    [editBookings.pending]: (state) => {
      state.loading = true;
    },
    [editBookings.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = state.booking.map((book) =>
        book._id === payload._id
          ? { ...book, attribute: payload.attribute }
          : book
      );
    },
    [editBookings.rejected]: (state) => {
      state.loading = true;
    },
    [deleteBookings.pending]: (state) => {
      state.loading = true;
    },
    [deleteBookings.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.booking = state.booking.filter(
        (book) => book._id !== payload
      );
    },
    [deleteBookings.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const selectBookings = (state) => state.bookings;

export const { orderBy, detailed } = bookingsSlice.actions;

export default bookingsSlice.reducer;

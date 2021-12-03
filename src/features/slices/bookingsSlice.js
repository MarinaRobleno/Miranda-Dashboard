import { createSlice } from "@reduxjs/toolkit";
import booking from "../../data/booking.js";

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: booking,
    reducers: {
        remove: (state, action) => {
            state = state.filter(book => book.id !== action.payload.id);
            return state;
        },
    }
})

export const selectBookings = (state) => state.bookings;

export const { remove } = bookingsSlice.actions

export default bookingsSlice.reducer;
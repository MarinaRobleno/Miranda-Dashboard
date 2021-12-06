import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from '../slices/bookingsSlice.js';
import roomsReducer from '../slices/roomsSlice.js';

export default configureStore({
    reducer: {
        bookings: bookingsReducer,
        rooms: roomsReducer
    }
})
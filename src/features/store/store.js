import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from '../slices/bookingsSlice.js';
import roomsReducer from '../slices/roomsSlice.js';
import contactReducer from '../slices/contactSlice.js';

export default configureStore({
    reducer: {
        bookings: bookingsReducer,
        rooms: roomsReducer,
        contact: contactReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from '../slices/bookingsSlice.js';
import roomsReducer from '../slices/roomsSlice.js';
import contactReducer from '../slices/contactSlice.js';
import usersReducer from '../slices/usersSlice.js';

export default configureStore({
    reducer: {
        bookings: bookingsReducer,
        rooms: roomsReducer,
        contact: contactReducer,
        users: usersReducer
    }
})
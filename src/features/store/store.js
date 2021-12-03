import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from '../slices/bookingsSlice.js';


export default configureStore({
    reducer: {
        bookings: bookingsReducer,
    }
})
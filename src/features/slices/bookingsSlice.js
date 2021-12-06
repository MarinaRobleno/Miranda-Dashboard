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
        orderBy: (state, action) => {
            if (action.payload === 'newest' || action.payload === 'oldest'){
                action.payload === 'newest' ?
                state = state.sort((a,b) => {
                        if (a.orderDate > b.orderDate){
                            return -1;
                        }
                        if(a.orderDate < b.orderDate){
                            return 1;
                        }
                        return 0;
                }) : state = state.sort((a,b) => {
                    if (a.orderDate > b.orderDate){
                        return 1;
                    }
                    if(a.orderDate < b.orderDate){
                        return -1;
                    }
                    return 0;
            })
            }
            
            
        }
    }
})

export const selectBookings = (state) => state.bookings;

export const { remove, orderBy } = bookingsSlice.actions

export default bookingsSlice.reducer;
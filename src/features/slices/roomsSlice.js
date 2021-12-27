import { createSlice } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.js";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: { rooms: rooms },
  reducers: {
    add: (state, action) => {
      state.rooms = [...state.rooms, action.payload];
      return state;
    },
    orderBy: (state, action) => {
      if (action.payload === "higher") {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "lower") {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "roomNumber") {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
});

export const selectRooms = (state) => state.rooms.rooms;

export const { add, orderBy } = roomsSlice.actions;

export default roomsSlice.reducer;

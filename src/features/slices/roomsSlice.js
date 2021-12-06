import { createSlice } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.js";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: rooms,
  reducers: {
    add: (state, action) => {},
    orderBy: (state, action) => {},
  },
});

export const selectRooms = (state) => state.rooms;

export const { add, orderBy } = roomsSlice.actions;

export default roomsSlice.reducer;

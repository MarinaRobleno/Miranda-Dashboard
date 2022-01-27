import { createSlice } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.js";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: { rooms: rooms, id: "" },
  reducers: {
    add: (state, action) => {
      state.rooms = [...state.rooms, action.payload];
      return state;
    },
    remove: (state, action) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
      return state;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    edit: (state, action) => {
      console.log(action.payload)
      state.rooms = state.rooms.map((room) =>
        room.id === action.payload.id
          ? {
              ...room,
              photo: action.payload.photo,
              roomNumber: action.payload.roomNumber,
              roomType: action.payload.roomType,
              amenities: action.payload.amenities,
              price: action.payload.price,
              offer_price: action.payload.offer_price,
              status: action.payload.status,
            }
          : room
      );
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
export const selectRoomsId = (state) => state.rooms.id;

export const { add, orderBy, remove, edit, getId } = roomsSlice.actions;

export default roomsSlice.reducer;

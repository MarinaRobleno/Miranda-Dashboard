import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteAPI, getAPI, postAPI, patchAPI } from "../../env.js";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  return await getAPI("rooms").then((data) => {
    return data;
  });
});

export const addRooms = createAsyncThunk("rooms/addRooms", async (roomData) => {
  return await postAPI("rooms", roomData).then((data) => {
    return data;
  });
});

export const deleteRooms = createAsyncThunk(
  "rooms/deleteRooms",
  async (roomId) => {
    return await deleteAPI("rooms", roomId).then((data) => {
      return data;
    });
  }
);

export const editRooms = createAsyncThunk(
  "rooms/editRooms",
  async (roomData) => {
    return await patchAPI("rooms", roomData._id, roomData).then((data) => {
      return data;
    });
  }
);

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: { rooms: [], id: "", loading: false },
  reducers: {
    getId: (state, action) => {
      state.id = action.payload;
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
  extraReducers: {
    [fetchRooms.pending]: (state) => {
      state.loading = true;
    },
    [fetchRooms.fulfilled]: (state, { payload }) => {
      state.rooms = payload;
      state.loading = false;
    },
    [fetchRooms.rejected]: (state) => {
      state.loading = false;
    },
    [addRooms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rooms = [...state.rooms, payload];
    },
    [addRooms.rejected]: (state) => {
      state.loading = false;
    },
    [deleteRooms.pending]: (state) => {
      state.loading = true;
    },
    [deleteRooms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rooms = state.rooms.filter((room) => room._id !== payload);
    },
    [deleteRooms.rejected]: (state) => {
      state.loading = false;
    },
    [editRooms.pending]: (state) => {
      state.loading = true;
    },
    [editRooms.fulfilled]: (state, { payload }) => {
      state.rooms = state.rooms.map((room) =>
        room._id === payload.id
          ? {
              ...room,
              photo: payload.photo,
              roomNumber: payload.roomNumber,
              roomType: payload.roomType,
              amenities: payload.amenities,
              price: payload.price,
              offer_price: payload.offer_price,
              status: payload.status,
              related_rooms: payload.related_rooms
            }
          : room
      );
    },
    [editRooms.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectRooms = (state) => state.rooms.rooms;
export const selectRoomsId = (state) => state.rooms.id;
export const selectRoomsLoading = (state) => state.rooms.loading;

export const { orderBy, getId } = roomsSlice.actions;

export default roomsSlice.reducer;

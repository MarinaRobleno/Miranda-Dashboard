import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.js";

export const usersSlice = createSlice({
  name: "users",
  initialState: {users: users},
  reducers: {
    add: (state, action) => {
      state.users = [...state.users, action.payload];
      return state;
    },
    remove: (state, action) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      return state;
    },
    orderBy: (state, action) => {
      
    },
  },
});

export const selectUsers = (state) => state.users;

export const { add, remove, orderBy } = usersSlice.actions;

export default usersSlice.reducer;
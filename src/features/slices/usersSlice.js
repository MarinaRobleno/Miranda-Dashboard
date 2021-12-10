import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.js";

export const usersSlice = createSlice({
  name: "users",
  initialState: {users: users},
  reducers: {
    add: (state, action) => {

    },
    remove: (state, action) => {
      
    },
    orderBy: (state, action) => {
      
    },
  },
});

export const selectContact = (state) => state.users.users;

export const { } = usersSlice.actions;

export default usersSlice.reducer;
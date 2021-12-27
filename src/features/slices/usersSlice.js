import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.js";

const sortedUsers = users.sort(function (a, b) {
  if (a.startDate > b.startDate) {
    return -1;
  }
  if (a.startDate < b.startDate) {
    return 1;
  }
  return 0;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: { users: sortedUsers },
  reducers: {
    add: (state, action) => {
      state.users = [...state.users, action.payload];
      return state;
    },
    remove: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      return state;
    },
    orderBy: (state, action) => {
      if (action.payload === "name") {
        state.users = state.users.sort((a, b) => {
          if (a[action.payload] > b[action.payload]) {
            return 1;
          }
          if (a[action.payload] < b[action.payload]) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
});

export const selectUsers = (state) => state.users;

export const { add, remove, orderBy } = usersSlice.actions;

export default usersSlice.reducer;

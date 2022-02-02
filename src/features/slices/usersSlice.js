import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import users from "../../data/users.js";
import { getAPI } from "../../env.js";

export const fetchUsersList = createAsyncThunk(
  "users/fetchUsersList",
  async () => {
    return await getAPI("users").then((data) => {
      return data;
    });
  }
);

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
  initialState: { users: [], id: "", loading: false },
  reducers: {
    add: (state, action) => {
      state.users = [...state.users, action.payload];
      return state;
    },
    remove: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload._id);
      return state;
    },
    edit: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id
          ? {
              ...user,
              _id: action.payload._id,
              name: action.payload.name,
              photo: action.payload.photo,
              job: action.payload.job,
              mail: action.payload.mail,
              phone: action.payload.phone,
              status: action.payload.status,
            }
          : user
      );
      return state;
    },
    getId: (state, action) => {
      state.id = action.payload;
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
      } else {
        state.users = state.users.sort((a, b) => {
          if (a.startDate > b.startDate) {
            return -1;
          }
          if (a.startDate < b.startDate) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: {
    [fetchUsersList.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsersList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsersList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectUsers = (state) => state.users;

export const { add, remove, orderBy, getId, edit } = usersSlice.actions;

export default usersSlice.reducer;

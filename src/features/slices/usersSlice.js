import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteAPI, getAPI, postAPI, patchAPI } from "../../env.js";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await getAPI("users").then((data) => {
    return data;
  });
});

export const addUsers = createAsyncThunk("users/addUsers", async (userData) => {
  return await postAPI("users", userData).then((data) => {
    return data;
  });
});

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (userId) => {
    return await deleteAPI("users", userId).then((data) => {
      return data;
    });
  }
);

export const editUsers = createAsyncThunk(
  "users/editUsers",
  async (userData) => {
    return await patchAPI("users", userData._id, userData).then((data) => {
      return data;
    });
  }
);

/*const sortedUsers = users.sort(function (a, b) {
  if (a.startDate > b.startDate) {
    return -1;
  }
  if (a.startDate < b.startDate) {
    return 1;
  }
  return 0;
});*/

export const usersSlice = createSlice({
  name: "users",
  initialState: { users: [], id: "", loading: false },
  reducers: {
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
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.loading = false;
    },
    [addUsers.pending]: (state) => {
      state.loading = true;
    },
    [addUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = [...state.users, payload];
    },
    [addUsers.rejected]: (state) => {
      state.loading = false;
    },
    [deleteUsers.pending]: (state) => {
      state.loading = true;
    },
    [deleteUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = state.users.filter((user) => user._id !== payload);
    },
    [deleteUsers.rejected]: (state) => {
      state.loading = false;
    },
    [editUsers.pending]: (state) => {
      state.loading = true;
    },
    [editUsers.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user._id === payload._id
          ? {
              ...user,
              _id: payload._id,
              name: payload.name,
              photo: payload.photo,
              job: payload.job,
              mail: payload.mail,
              phone: payload.phone,
              status: payload.status,
            }
          : user
      );
    },
    [editUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const selectUsers = (state) => state.users;

export const { orderBy, getId } = usersSlice.actions;

export default usersSlice.reducer;

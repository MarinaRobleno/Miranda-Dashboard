import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contact from "../../data/contact.js";
import { getAPI, deleteAPI } from "../../env.js";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
     return await getAPI('contacts')
        .then((data) => {return data});
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId) => {
    return await deleteAPI("contacts", contactId).then((data) => {
      return data;
    });
  }
);

const sortedContact = contact.sort(function (a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
});

export const contactSlice = createSlice({
  name: "contact",
  initialState: { contact: [], reviewedContact: [], archived: [] },
  reducers: {
    remove: (state, action) => {
      state.reviewedContact.push(action.payload);
      state.contact = state.contact.filter(
        (contact) => contact._id !== action.payload._id
      );
      return state;
    },
    archive: (state, action) => {
      state.archived.push(action.payload);
      state.reviewedContact = state.reviewedContact.filter(
        (contact) => contact._id !== action.payload._id
      );
      return state;
    },
    orderBy: (state, action) => {
      if (action.payload === "newest" || action.payload === "oldest") {
        if (action.payload === "newest") {
          state.reviewedContact = state.reviewedContact.sort((a, b) => {
            if (a.date > b.date) {
              return -1;
            }
            if (a.date < b.date) {
              return 1;
            }
            return 0;
          });
          state.archived = state.archived.sort((a, b) => {
            if (a.date > b.date) {
              return -1;
            }
            if (a.date < b.date) {
              return 1;
            }
            return 0;
          });
        } else {
          state.reviewedContact = state.reviewedContact.sort((a, b) => {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          });
          state.archived = state.archived.sort((a, b) => {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          });
        }
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.contact = payload;
    },
    [fetchContacts.rejected]: (state) => {
      state.loading = false;
    },
    [deleteContacts.pending]: (state) => {
      state.loading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.contact = state.contact.filter(
        (contact) => contact._id !== payload
      );
    },
    [deleteContacts.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const selectContact = (state) => state.contact;

export const { remove, archive, orderBy } = contactSlice.actions;

export default contactSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import contact from "../../data/contact.js";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {contact: contact, reviewedContact: [], archived: []},
  reducers: {
    remove: (state, action) => {
      state.reviewedContact.push(action.payload);
      state.contact = state.contact.filter((contact) => contact.id !== action.payload.id);
      return state;
    },
    archive: (state, action) => {
      state.archived.push(action.payload);
      state.reviewedContact = state.reviewedContact.filter((contact) => contact.id !== action.payload.id);
      return state;
    },
    orderBy: (state, action) => {
      if (action.payload === "newest" || action.payload === "oldest") {
        action.payload === "newest"
          ? (state.reviewedContact = state.reviewedContact.sort((a, b) => {
              if (a.date > b.date) {
                return -1;
              }
              if (a.date < b.date) {
                return 1;
              }
              return 0;
            }))
          : (state.reviewedContact = state.reviewedContact.sort((a, b) => {
              if (a.date > b.date) {
                return 1;
              }
              if (a.date < b.date) {
                return -1;
              }
              return 0;
            }));
      }
    },
  },
});

export const selectContact = (state) => state.contact;

export const { remove, archive, orderBy } = contactSlice.actions;

export default contactSlice.reducer;

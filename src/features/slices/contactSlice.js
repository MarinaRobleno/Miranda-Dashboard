import { createSlice } from "@reduxjs/toolkit";
import contact from "../../data/contact.js";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {contact: contact},
  reducers: {
    remove: (state, action) => {
      state.contact = state.contact.filter((contact) => contact.id !== action.payload.id);
      return state.contact;
    },
    archive: (state, action) => {

    },
    orderBy: (state, action) => {
      if (action.payload === "newest" || action.payload === "oldest") {
        action.payload === "newest"
          ? (state.contact = state.contact.sort((a, b) => {
              if (a.date > b.date) {
                return -1;
              }
              if (a.date < b.date) {
                return 1;
              }
              return 0;
            }))
          : (state.contact = state.contact.sort((a, b) => {
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

export const selectContact = (state) => state.contact.contact;

export const { remove, archive, orderBy } = contactSlice.actions;

export default contactSlice.reducer;

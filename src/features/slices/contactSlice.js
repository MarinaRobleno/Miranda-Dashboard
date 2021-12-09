import { createSlice } from "@reduxjs/toolkit";
import contact from "../../data/contact.js";

export const contactSlice = createSlice({
  name: "contact",
  initialState: contact,
  reducers: {
    remove: (state, action) => {
      state = state.filter((contact) => contact.id !== action.payload.id);
      return state;
    },
    archive: (state, action) => {

    },
    orderBy: (state, action) => {
      if (action.payload === "newest" || action.payload === "oldest") {
        action.payload === "newest"
          ? (state = state.sort((a, b) => {
              if (a.date > b.date) {
                return -1;
              }
              if (a.date < b.date) {
                return 1;
              }
              return 0;
            }))
          : (state = state.sort((a, b) => {
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

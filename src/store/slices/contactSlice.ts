import { createSlice } from "@reduxjs/toolkit";

export interface IContactState {
  data: {
    name: string;
    secondName: string;
    phone: string;
    email: string;
    id: string;
    img: string;
  }[];
}

const initialState: IContactState = {
  data: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.data = [...state.data, action.payload];
    },
    delContact(state, action) {
      state.data = [...state.data.filter((el) => el.id !== action.payload)];
    },
    delAllContact(state) {
      state.data = [];
    },
    updateContact(state, action) {
      const index = state.data.findIndex((el) => el.id === action.payload.id);
      console.log("штв", index);
      console.log("acccc", action.payload);
      state.data = [
        ...state.data.slice(0, index),
        action.payload,
        ...state.data.slice(index + 1),
      ];
    },
  },
});

export const { addContact, delContact, updateContact, delAllContact } =
  contactSlice.actions;

export default contactSlice.reducer;

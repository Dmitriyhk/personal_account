import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string | null;
  id: string | null;
  isError: boolean;
}

const initialState: IUser = {
  email: null,
  id: null,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
    setError(state, action) {
      state.isError = action.payload;
    },
  },
});

export const { setUser, removeUser, setError } = userSlice.actions;

export default userSlice.reducer;

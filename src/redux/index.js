import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    email: "",
    id: "",
  },
  reducers: {
    loginRedux: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const { userName, email, id } = action.payload.data;
      state.userName = userName;
      state.email = email;
      state.id = id;
    },
    logoutRedux: (state) => {
      state.userName = "";
      state.email = "";
      state.id = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});

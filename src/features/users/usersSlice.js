import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Doe" },
  { id: "3", name: "Richard Doe " },
  { id: "4", name: "Johnny Roe " },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;

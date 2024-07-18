import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
  name: "path",
  initialState: "",
  reducers: {
    setPath: (state, action) => action.payload,
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;

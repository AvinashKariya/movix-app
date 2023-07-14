import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfig: (state, action) => {
      return void (state.url = action.payload);
    },
    getGenres: (state, action) => {
      return void (state.genres = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig, getGenres } = homeSlice.actions;

export default homeSlice.reducer;

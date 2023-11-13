import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMovie: [],
};

const authMovieSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    setDataMovie: (state, action) => {
      state.dataMovie = action.payload;
    },
  },
});

export const { setDataMovie } = authMovieSlice.actions;

export default authMovieSlice.reducer;

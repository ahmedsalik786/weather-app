import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeather(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchWeather } = weatherSlice.actions;
export default weatherSlice.reducer;

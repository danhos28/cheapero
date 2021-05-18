import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    jwtToken: '',
  },
  reducers: {
    addToken: (state, action) => {
      state.jwtToken = action.payload;
    },
  },
});

export const { addToken } = tokenSlice.actions;

export default tokenSlice.reducer;

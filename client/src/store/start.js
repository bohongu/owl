import { createSlice } from '@reduxjs/toolkit';

const initialState = { start: false };

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setStart(state) {
      state.start = true;
    },
    setFinish(state) {
      state.start = false;
    },
  },
});

export const startActions = startSlice.actions;
export default startSlice;

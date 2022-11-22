import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminMessage: null,
};

const adminSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.adminMessage = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;

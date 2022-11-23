import { createSlice } from '@reduxjs/toolkit';

const initialState = { roomTitle: '' };

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setRoomTitle(state, action) {
      state.roomTitle = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;

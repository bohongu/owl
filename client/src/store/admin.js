import { createSlice } from '@reduxjs/toolkit';

const initialState = { roomTitle: '', roomList: [] };

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setRoomTitle(state, action) {
      state.roomTitle = action.payload;
    },
    setRoomList(state, action) {
      state.roomList.push(action.payload);
    },
    clearRoomList(state) {
      state.roomList = [];
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;

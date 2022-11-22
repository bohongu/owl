import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickName: '',
  roomName: '',
  handle: null,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setnickName(state, action) {
      state.nickName = action.payload;
    },
    setroomName(state, action) {
      state.roomName = action.payload;
    },
    setHandle(state, action) {
      state.handle = action.payload;
    },
  },
});

export const socketActions = socketSlice.actions;
export default socketSlice;

import { createSlice } from '@reduxjs/toolkit';

const initialState = { join: true, room: false, chat: false };

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    goJoin(state) {
      state.join = true;
      state.room = false;
      state.chat = false;
    },
    goRoom(state) {
      state.join = false;
      state.room = true;
      state.chat = false;
    },
    goChat(state) {
      state.join = false;
      state.room = false;
      state.chat = true;
    },
  },
});

export const startActions = startSlice.actions;
export default startSlice;

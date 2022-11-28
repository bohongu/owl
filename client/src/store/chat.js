import { createSlice } from '@reduxjs/toolkit';

const initialState = { chats: [] };

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action) {
      state.chats.push(action.payload);
    },
    setChatsClear(state) {
      state.chats = [];
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice;

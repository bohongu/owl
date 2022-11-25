import { createSlice } from '@reduxjs/toolkit';

const initialState = { chat: [] };

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat(state, action) {
      state.chat.push(action.payload);
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice;

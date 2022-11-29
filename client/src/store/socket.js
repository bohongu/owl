import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const initialState = {
  socket: io.connect('https://owl-chat-app.herokuapp.com/'),
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {},
});

export const socketActions = socketSlice.actions;
export default socketSlice;

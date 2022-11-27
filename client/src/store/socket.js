import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const initialState = { socket: io.connect('http://localhost:3001') };

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {},
});

export const socketActions = socketSlice.actions;
export default socketSlice;

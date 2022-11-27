import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './admin';
import chatSlice from './chat';
import modalSlice from './modal';
import socketSlice from './socket';
import startSlice from './start';

const store = configureStore({
  reducer: {
    start: startSlice.reducer,
    modal: modalSlice.reducer,
    admin: adminSlice.reducer,
    chat: chatSlice.reducer,
    socket: socketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

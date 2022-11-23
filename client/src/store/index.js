import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './admin';
import modalSlice from './modal';
import startSlice from './start';

const store = configureStore({
  reducer: {
    start: startSlice.reducer,
    modal: modalSlice.reducer,
    admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

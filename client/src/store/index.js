import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './admin';
import startSlice from './start';
import themeSlice from './theme';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    start: startSlice.reducer,
    admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

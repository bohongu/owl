import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

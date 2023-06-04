import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './search.api';

export default configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

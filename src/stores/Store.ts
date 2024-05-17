// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {moviesApi} from '../services/apis/MoviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;

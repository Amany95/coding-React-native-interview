// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {moviesApi} from '../services/apis/MoviesApi';
import loggerMiddleware from './LoggerMiddleWare';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware, loggerMiddleware),
});

export default store;

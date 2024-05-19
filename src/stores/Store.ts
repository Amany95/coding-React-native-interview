// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {moviesApi} from '../services/apis/MoviesApi';
import loggerMiddleware from './LoggerMiddleware';
import {weatherApi} from '../services/apis/WeatherApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      weatherApi.middleware,
      loggerMiddleware,
    ),
});
// loggerMiddleware
export default store;

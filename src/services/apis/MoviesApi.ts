import {createApi} from '@reduxjs/toolkit/query/react';
import {BaseUrlApp} from '../../constants/Urls';
import {axiosBaseQuery} from '../AxiosBaseQuery';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: axiosBaseQuery({baseUrl: BaseUrlApp}),
  endpoints: builder => ({
    getTopRatedMovies: builder.query<any, void>({
      query: () => ({
        url: '/movie/top_rated?language=en-US&page=1',
        method: 'GET',
      }),
    }),
    getGenreMovies: builder.query<any, void>({
      query: () => ({
        url: '/genre/movie/list',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetTopRatedMoviesQuery, useGetGenreMoviesQuery} = moviesApi;

import {createApi} from '@reduxjs/toolkit/query/react';
import {BaseUrlApp} from '../../constants/Urls';
import {axiosBaseQuery} from '../AxiosBaseQuery';
import {accountId} from '../../constants/RequestParams';

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
    getFavouriteMovies: builder.query<any, {page: number}>({
      query: ({page}) => ({
        url: `/account/${accountId}/favorite/movies`,
        method: 'GET',
        params: {page},
      }),
    }),
  }),
});

export const {
  useGetTopRatedMoviesQuery,
  useGetGenreMoviesQuery,
  useGetFavouriteMoviesQuery,
} = moviesApi;

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
    getDiscoverMovies: builder.query<
      any,
      {page: number; year: number; sortBy: string; genreId: number | null}
    >({
      query: ({page, year, sortBy, genreId}) => ({
        url: '/discover/movie',
        method: 'GET',
        params: {
          page: page,
          primary_release_year: year,
          sort_by: sortBy,
          with_genres: genreId,
        },
      }),
    }),
    getSearchMovies: builder.query<
      any,
      {page: number; year: number; searchedText: string}
    >({
      query: ({page, year, searchedText}) => ({
        url: '/search/movie',
        method: 'GET',
        params: {
          page: page,
          primary_release_year: year,
          query: searchedText,
        },
      }),
    }),
  }),
});

export const {
  useGetTopRatedMoviesQuery,
  useGetGenreMoviesQuery,
  useGetFavouriteMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetSearchMoviesQuery
} = moviesApi;

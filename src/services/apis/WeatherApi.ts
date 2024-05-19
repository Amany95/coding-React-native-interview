import {createApi} from '@reduxjs/toolkit/query/react';
import {WeatherUrl} from '../../constants/Urls';
import {axiosBaseQuery} from '../AxiosBaseQuery';
import {accountId} from '../../constants/RequestParams';
import { weatherKey } from '../../constants/Keys';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: axiosBaseQuery({baseUrl: WeatherUrl}),
  endpoints: builder => ({
    getWeatherMovie: builder.query<any, {location: string}>({
      query: ({location}) => ({
        url: '/weather',
        method: 'GET',
        params: {
          q: location,
          appid: weatherKey,
          units: 'metric',
        },
      }),
    }),
  }),
});

export const {useGetWeatherMovieQuery} = weatherApi;

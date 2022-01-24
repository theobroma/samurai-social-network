// https://stackoverflow.com/questions/67855976/rtk-query-get-state-from-another-slice-using-getstate/67858311
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_KEY } from '../../@api';

const pageSize = 10;

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    listPosts: builder.query<any, number | void>({
      //   query: (page = 1) =>
      //     `/trending/tv/week?page=${page}&api_key=${API_KEY}&language=ru`,
      query: (currentPage = 1) => ({
        url: `users?page=${currentPage}&count=${pageSize}`,
        method: 'GET',
        // withCredentials: true,
        headers: {
          'API-KEY': API_KEY,
        },
      }),
    }),
  }),
});

export const { useListPostsQuery } = usersApi;

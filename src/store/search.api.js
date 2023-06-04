import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mobile-staging.gametime.co',
  }),
  tagTypes: ['Results'],
  keepUnusedDataFor: 3600,
  endpoints: (build) => ({
    search: build.query({
      query: (q) => ({
        url: `v1/search?q=${q}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Results', id }],
    }),
  }),
});

export const { useSearchQuery, useLazySearchQuery } = searchApi;

export const {
  search: { useQueryState: useSearchQueryState },
} = searchApi.endpoints;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aiProductInfo = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  reducerPath: 'aiProductInfo',
  endpoints: (builder) => ({
    compareProducts: builder.mutation({
      query: (data) => ({
        url: `aiProductInfo?${data}`,
        method: 'GET',
      }),
      transformResponse: (response, meta, arg) => response.aiRes,
    }),
  }),
});

export const { useCompareProductsMutation } = aiProductInfo;
